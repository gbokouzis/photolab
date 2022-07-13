<?php

namespace App\Http\Controllers;

use App\Models\Relationship;
use App\Models\User;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RelationshipController extends Controller
{
    public function followings(User $user)
    {
        return Inertia::render('Profile/Followings', [
            'followings' => $user->followings(),
            'profile' => [
                'user' => $user
            ]
        ]);
    }

    public function followers(User $user)
    {
        return Inertia::render('Profile/Followers', [
            'followers' => $user->followers()->withCount([
                'followers as following' => function($q) {
                    return $q->where('follower_id', auth()->id());
                }
            ])->withCasts(['following' => 'boolean']),
            'profile' => [
                'user' => $user
            ]
        ]);
    }

    public function follow(User $user, $id){
        $user->followings()->attach($id);
        return redirect()->back();
    }

    public function unfollow(User $user, $id){
        $user->followings()->detach($id);
        return redirect()->back();
    }

}
