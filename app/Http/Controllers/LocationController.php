<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LocationController extends Controller
{
    public function show(Request $request, Location $location)
    {
        // $posts = ImagePost::imagePostCategoryWithUsers($category->id)->get();
        
        $posts = $location->imagePosts()
            ->with('image', 'user')
            ->withCount(['likes as liked' => function ($q) {
                $q->where('user_id', Auth()->id());
            }])
            ->withCasts(['liked' => 'boolean'])
            ->paginate();

        if ($request->wantsJson()) {
            return $posts;
        }

        return Inertia::render('Locations/Show', compact('posts'));
    }
}
