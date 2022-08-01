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
use App\Models\Tag;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ImagePostController extends Controller
{ 
    // TODO na mpoun sxolia
    // TODO middleware auth gia to ImagePost apo to route (->only([])) na to fero edo

    public function index(Request $request)
    {
        // sleep(1);
        $posts = ImagePost::desc()
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

    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Posts/Create', compact('categories'));
    }

    public function store(StoreImagePostRequest $request)
    {
        sleep(2);

        // dd($request);
        // $image = $request->file('photos');
        // $image = Storage::disk('public')->putFile('photos', $request->image);
        // dd($image);
        // $x = Storage::url($image);
        // dd($x);

        $data = $request->validated();
        // dd($data);

        if ( count($data['tags']) !== 0 ) {
            $idFromTags = [];
            
            foreach ($data['tags'] as $tag) {
                $dbTag = Tag::where('content', 'LIKE', $tag)->first();

                if ( $dbTag !== null ) {
                    array_push($idFromTags, $dbTag->id);
                }
                
                if ( $dbTag === null ) {
                    $newTag = Tag::create(['content' => $tag]);
                    array_push($idFromTags, $newTag->id);
                }
            }
        }
        
        $category = Category::where('content', 'LIKE', $data['category'])->first();
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
            'post' => ImagePost::with(['user', 'tags', 'comments', 'image'])
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
        // $post = ImagePost::findOrFail($post->id);
        // $post = new ImagePostResource($post);
        $this->authorize('update', $post);
        
        $post = ImagePost::with('tags:content')->findOrFail($post->id);
        // $post = new UpdateImagePostResource($post);
        


        // dd($postt);
        return inertia('Posts/Edit', compact('post'));
    }

    public function update(UpdateImagePostRequest $request, ImagePost $post)
    {
        // dd($post);
        // $post = ImagePost::findOrFail($request->id);
        // $this->authorize('update', $post);
        // $data = $request->validated();
        // $post->fill($data)->save();

        $this->authorize('update', $post);
        $post->update($request->validated());

        return redirect()->route('posts.index');
    }
    
    public function destroy(ImagePost $post)
    {         
        // $post = ImagePost::findOrFail($id);
        $this->authorize('delete', $post);
        $post->delete();

        return redirect()->route('posts.index');
    }
}
