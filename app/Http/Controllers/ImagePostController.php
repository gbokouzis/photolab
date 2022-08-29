<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreImagePostRequest;
use App\Http\Requests\UpdateImagePostRequest;
use App\Http\Resources\ImagePostResource;
use App\Http\Resources\UpdateImagePostResource;
use App\Models\Category;
use App\Models\Image;
use App\Models\ImagePost;
use App\Models\ImagePostTag;
use App\Models\Relationship;
use App\Models\Tag;
use App\Models\Location;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
// use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ImagePostController extends Controller
{ 
    // TODO na mpoun sxolia
    // TODO middleware auth gia to ImagePost apo to route (->only([])) na to fero edo

    public function __construct()
    {
        $this->middleware('auth')
            ->only([
                'create',
                'show', 
                'store', 
                'edit', 
                'update', 
                'destroy',
                'posts_following'
            ]);
    }

    public function index(Request $request)
    {
        // sleep(1);
        $posts = ImagePost::desc()
            ->has('user')
            ->with('user', 'image')
            ->withCount(['likes as liked' => function ($q) {
                $q->where('user_id', Auth()->id());
            }])
            ->withCasts(['liked' => 'boolean'])
            ->paginate();

        if ($request->wantsJson()) {
            return $posts;
        }
        
        return Inertia::render('Posts/Index', [ 'posts' => $posts ]);
    }

    public function posts_following(Request $request)
    {
        $followedIds = Relationship::where('follower_id', Auth()->id())->pluck('followed_id')->toArray();

        $posts = ImagePost::desc()
            ->whereIn('user_id', $followedIds)
            ->with('image', 'user')
            ->withCount(['likes as liked' => function ($q) {
                $q->where('user_id', Auth()->id());
            }])
            ->withCasts(['liked' => 'boolean'])
            ->paginate();

        if ($request->wantsJson()) {
            return $posts;
        }

        return Inertia::render('Posts/Following', [ 'posts' => $posts ]);
    }

    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Posts/Create', compact('categories'));
    }

    public function store(StoreImagePostRequest $request)
    {
        // sleep(2);
    
        $data = $request->validated();
        
        $imageExif = exif_read_data($data['image']);
        $imageExifComputed = $imageExif['COMPUTED'];
        
        if ( array_key_exists('Model', $imageExif) && $imageExif['Model'] != '--' ) {
            $data['camera'] = $imageExif['Model'];
            $data['iso'] = $imageExif['ISOSpeedRatings'];
            $data['aperture'] = $imageExifComputed['ApertureFNumber'];
        }
        $data['height'] = $imageExifComputed['Height'];
        $data['width'] = $imageExifComputed['Width'];

        // dd($data);
        // $data[]
        
        $country = ucwords($data['country']); 
        $city = ucwords($data['city']);
        $locationID = null;
        unset($data['country'], $data['city']);


        $city_country = $city . ' ' . $country;
        $country_city = $country . ' ' . $city;
        

        $dbLocation = Location::where('country', 'LIKE', $country)
            ->where('city', 'LIKE', $city)->first();
        
        if ($dbLocation === null) {
            $newLocation = Location::create([
                'country' => $country,
                'city' => $city,
                'city_country' => $city_country,
                'country_city' => $country_city,
            ]);
            $locationID = $newLocation->id;          
        } 


        if ($dbLocation !== null) $locationID = $dbLocation->id;
        
        $data['location_id'] = $locationID;
        
        // dd($data);


        if ( count($data['tags']) !== 0 ) {
            $idFromTags = [];
            
            foreach ($data['tags'] as $tag) {
                $dbTag = Tag::where('name', 'LIKE', $tag)->first();

                if ( $dbTag !== null ) array_push($idFromTags, $dbTag->id);
                
                if ( $dbTag === null ) {
                    $newTag = Tag::create(['name' => $tag]);
                    array_push($idFromTags, $newTag->id);
                }
            }
        }
        
        $category = Category::where('name', 'LIKE', $data['category'])->first();
        unset($data['category']);
        $data['user_id'] = $request->user()->id;
        $data['category_id'] = $category->id;

        $newPost = ImagePost::create($data);
        
        $newPost->tags()->attach($idFromTags);

        // dd($newPost);
        // TODO xriazete to if
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('public/images');
            $newPost->image()->save(
                Image::make([
                    'path' => Storage::url($path),
                ])
            );
        }
        // dd($path);
        
        // foreach ($idFromTags as $idFromTag) { 
        //     ImagePostTag::create([
        //         'image_post_id' => $newPost->id,
        //         'tag_id' => $idFromTag
        //     ]);
        // }

        return Redirect::route('posts.index');
    }
    
    public function show($id)
    {
        return Inertia::render('Posts/Show', [
            'post' => ImagePost::with(['user', 'user.image', 'tags', 'comments', 'image', 'location'])
                ->withCount('likes as likes')
                ->withCount(['likes as liked' => function ($q) {
                    $q->where('user_id', Auth()->id());
                }])
                ->withCasts(['liked' => 'boolean'])
                // ->withCasts(['liked' => 'boolean'])
                ->findOrFail($id)
        ]);
    }

    public function edit(ImagePost $post)
    {
        // $post = ImagePost::with('tags:name')->findOrFail($post->id);

        $this->authorize('update', $post);

        $post = $post::with('tags:name')->findOrFail($post->id);
        $post = new UpdateImagePostResource($post);

        return inertia('Posts/Edit', compact('post'));
    }

    public function update(UpdateImagePostRequest $request, ImagePost $post)
    {
        $this->authorize('update', $post);
        $data = $request->validated();
        
        if ( count($data['tags']) !== 0 ) {
            $idFromTags = [];
            
            foreach ($data['tags'] as $tag) {
                $dbTag = Tag::where('name', 'LIKE', $tag)->first();

                if ( $dbTag !== null ) array_push($idFromTags, $dbTag->id);
                
                if ( $dbTag === null ) {
                    $newTag = Tag::create(['name' => $tag]);
                    array_push($idFromTags, $newTag->id);
                }
            }

            $post->tags()->sync($idFromTags);
            unset($data['tags']);
        }

        $post->update($data);

        return redirect()->route('posts.index');
    }
    
    public function destroy(ImagePost $post)
    {         
        // $post = ImagePost::findOrFail($id);
        $this->authorize('delete', $post);
        $postWithImage = $post->image()->first();
        $postWithImageReplace = str_replace('/storage', '', $postWithImage->path);
        // dd($postWithImageReplace);
        $isDeleting = Storage::disk('public')->delete($postWithImageReplace);
        if ($isDeleting) 
        {
            $postWithImage->delete();
            $post->delete();
        }
        return redirect()->route('posts.index');
    }


}
