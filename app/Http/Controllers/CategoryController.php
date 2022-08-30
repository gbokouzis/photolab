<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Models\Category;
use App\Models\ImagePost;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Cache::remember("categories", now()->addSeconds(60), function () {
            $categories = Category::all();
            $items = array();
            foreach($categories as $category) {
                $item = Category::with(['imagePosts' => function($q) {
                    $q->where('created_at', '>',(new Carbon)->subDays(7)->toDateString())
                    ->withCount('likes as likes')
                    ->orderBy('likes', 'desc')
                    ->with('image')
                    ->first();
                }])
                ->findOrFail($category->id);
                array_push($items, $item);
            }
            return $items;
        });
        return Inertia::render('Categories/Index', ['categories' => $categories]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Categories/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCategoryRequest $request)
    {
        $data = $request->validated();
        Category::create($data);

        Cache::forget("categories");

        return Redirect::route('categories.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Category $category)
    {
        // $posts = ImagePost::imagePostCategoryWithUsers($category->id)->get();
        
        $posts = $category->imagePosts()
            ->with('image', 'user')
            ->withCount(['likes as liked' => function ($q) {
                $q->where('user_id', Auth()->id());
            }])
            ->withCasts(['liked' => 'boolean'])
            ->paginate();

        if ($request->wantsJson()) {
            return $posts;
        }

        return Inertia::render('Tags/Show', compact('posts'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        return Inertia::render('Categories/Edit', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(StoreCategoryRequest $request, Category $category)
    {
        $category->update($request->validated());
        return redirect()->route('categories.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return redirect()->route('categories.index');
    }
}
