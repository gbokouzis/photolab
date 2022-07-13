<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreImagePostRequest;
use App\Http\Resources\ImagePostResource;
use App\Models\Category;
use App\Models\ImagePost;
use App\Models\ImagePostTag;
use App\Models\Tag;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ImagePostController extends Controller
{
    // TODO middleware auth gia to ImagePost edo ->only([])
    // ! oxi sto resource

    public function index()
    {
        $posts = ImagePost::desc()->with('user')->get();
        sleep(1);
        return Inertia::render('Posts/Index', compact('posts'));
    }

    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Posts/Create', compact('categories'));
    }

    public function store(StoreImagePostRequest $request)
    {
        // dd($request);
        // $image = $request->file('photos');
        // $image = Storage::disk('public')->putFile('photos', $request->image);
        // dd($image);
        // $x = Storage::url($image);
        // dd($x);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('photos');
        }
        dd($path);

        
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
        // dd($data);
        $newPost = ImagePost::create($data);
        
        $newPost->tags()->attach($idFromTags);

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
            'post' => ImagePost::with(['user', 'comments'])->findOrFail($id)
        ]);
    }

    public function edit(ImagePost $post)
    {
        // $post = ImagePost::findOrFail($id);
        // $post = new ImagePostResource($post);
        $this->authorize('update', $post);

        return inertia('Posts/Edit', compact('post'));
    }

    public function update(StoreImagePostRequest $request, ImagePost $post)
    {
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
