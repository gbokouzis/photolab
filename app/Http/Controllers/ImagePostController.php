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
use Illuminate\Support\Facades\Cache;
// use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ImagePostController extends Controller
{
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

    // * Return all posts descending created_at and pagination
    public function index(Request $request)
    {
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

    // * Return image posts for the user follow where we want
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

    // * Store new post
    public function store(StoreImagePostRequest $request)
    {
        $data = $request->validated();

        // get image exif values and append in data
        $imageExif = exif_read_data($data['image']);
        $imageExifComputed = $imageExif['COMPUTED'];

        if ( array_key_exists('Model', $imageExif) && $imageExif['Model'] != '--' ) {
            $data['camera'] = $imageExif['Model'];
            $data['iso'] = $imageExif['ISOSpeedRatings'];
            $data['aperture'] = $imageExifComputed['ApertureFNumber'];
        }
        $data['height'] = $imageExifComputed['Height'];
        $data['width'] = $imageExifComputed['Width'];

        // put the location data in variables
        $country = ucwords($data['country']);
        $city = ucwords($data['city']);
        $locationID = null;
        unset($data['country'], $data['city']);

        $city_country = $city . ' ' . $country;
        $country_city = $country . ' ' . $city;

        // check if this location exists again, if no create new location
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


        if ( count($data['tags']) !== 0 ) {
            $idFromTags = [];
            // check if this tag exists again, if no create new
            foreach ($data['tags'] as $tag) {
                $dbTag = Tag::where('name', 'LIKE', $tag)->first();

                if ( $dbTag !== null ) array_push($idFromTags, $dbTag->id);

                if ( $dbTag === null ) {
                    $newTag = Tag::create(['name' => $tag]);
                    array_push($idFromTags, $newTag->id);
                }
            }
        }
        // get the selected category
        $category = Category::where('name', 'LIKE', $data['category'])->first();
        unset($data['category']);
        $data['category_id'] = $category->id;
        $data['user_id'] = $request->user()->id;

        // create post with relationships and attach tags
        $newPost = ImagePost::create($data);

        $newPost->tags()->attach($idFromTags);

        // save image to the storage
        $path = $request->file('image')->store('public/images');
        $newPost->image()->save(
            Image::make([
                'path' => Storage::url($path),
            ])
        );

        return Redirect::route('posts.index');
    }

    // Show a photo
    public function show($id)
    {
        $posts = ImagePost::with(['user', 'user.image', 'tags', 'image', 'location'])
            ->withCount('likes as likes')
            ->withCount(['likes as liked' => function ($q) {
                $q->where('user_id', Auth()->id());
            }])
            ->withCasts(['liked' => 'boolean'])
            // ->withCasts(['liked' => 'boolean'])
            ->findOrFail($id);

        return Inertia::render('Posts/Show', ['post' => $posts]);
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
        $pathReplace = str_replace('/storage', '', $postWithImage->path);

        $isDeleting = Storage::disk('public')->delete($pathReplace);
        if ($isDeleting)
        {
            $postWithImage->delete();
            $post->delete();
        }
        return redirect()->route('posts.index');
    }


}
