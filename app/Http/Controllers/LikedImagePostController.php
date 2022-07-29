<?php

namespace App\Http\Controllers;

use App\Models\ImagePost;
use App\Models\Like;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LikedImagePostController extends Controller
{
    public function like(Request $request, ImagePost $imagePost)
    {
        // $likeToggle[auth()->id()] = ['image_post_id' => $request->imagepost];

        // if (DB::table('liked_image_posts')->where('user_id', '=', auth()->id())->exists()) {
        //     DB::table('liked_image_posts')->where('image_post_id', '=', $request->imagepost)->delete();
        // } else {
        // }
        // $imagePost->likes()->attach(auth()->id(), ['image_post_id' => $request->imagepost]);
        Like::create([
            'user_id' => auth()->id(),
            'image_post_id' => $request->imagepost
        ]);
            
        return redirect()->back();
    }

    public function unlike(Request $request) 
    {
        // dd($request);
        $like = Like::where('user_id', '=', auth()->id())
            ->where('image_post_id', '=', $request->imagepost)
            ->first();
        $like->delete();

        return redirect()->back();
    }

}
