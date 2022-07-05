<?php

namespace App\Http\Controllers;

use App\Models\Relationship;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RelationshipController extends Controller
{
    public function following(User $user)
    {
        return Inertia::render('Profile/Following', [
            'following' => [],
            'profile' => [
                'user' => $user
            ]
        ]);
    }

    public function followers(User $user)
    {
        return Inertia::render('Profile/Followers', [
            'followers' => [],
            'user' => $user
        ]);
    }

    public function follow(User $user){
        $relation = new Relationship();
        $relation->follower_id = Auth::User()->id;
        $relation->followed_id = $user->id;
        $relation->save();
    }
}
