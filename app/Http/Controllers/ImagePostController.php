<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreImagePostRequest;
use App\Http\Resources\ImagePostResource;
use App\Models\ImagePost;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ImagePostController extends Controller
{
    // TODO middleware auth gia to ImagePost edo ->only([])
    // ! oxi sto resource
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = ImagePost::latest()->with('user')->get();
        sleep(1);
        return Inertia::render('Posts/Index', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Posts/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreImagePostRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = $request->user()->id;
        ImagePost::create($data);
        return Redirect::route('posts.index');
    }
    
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ImagePost  $imagePost
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Inertia::render('Posts/Show', [
            'post' => ImagePost::with(['user', 'comments'])->findOrFail($id)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ImagePost  $imagePost
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post = ImagePost::findOrFail($id);
        $this->authorize('update', $post);
        $post = new ImagePostResource($post);

        return inertia('Posts/Edit', compact('post'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ImagePost  $imagePost
     * @return \Illuminate\Http\Response
     */
    public function update(StoreImagePostRequest $request)
    {
        $post = ImagePost::findOrFail($request->id);
        $this->authorize('update', $post);
        $data = $request->validated();
        $post->fill($data)->save();

        return redirect()->route('posts.index');
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ImagePost  $imagePost
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {         
        $post = ImagePost::findOrFail($id);
        $this->authorize('delete', $post);
        $post->delete();

        return redirect()->route('posts.index');
    }
}
