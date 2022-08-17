<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAvatarPostRequest;
use App\Models\Image;
use App\Models\Relationship;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return Inertia::render('Profile/Index', compact('users'));
    }

    // public function create()
    // {
    //     //
    // }

    // public function store(Request $request)
    // {
    //     //
    // }



    public function show(User $user, Request $request)
    {
        // dd($user);
        $isFollower = Relationship::where('follower_id', Auth()->id())
            ->where('followed_id', $user->id)
            ->exists();

        $profileImg = $user->image()->first();

        $posts = $user->imagePosts()
            ->with('image')
            ->withCount(['likes as liked' => function ($q) {
                $q->where('user_id', Auth()->id());
            }])
            ->withCasts(['liked' => 'boolean'])
            ->paginate();

        if ($request->wantsJson()) {
            return $posts;
        }
        // dd($user, $isFollower);
        return Inertia::render('Profile/Show', [
            'profileImg' => $profileImg,
            'posts' => $posts,
            'user' => $user,
            'isFollower' => $isFollower,
        ]);
    }
    
    // public function edit(User $user)
    // {
    //     //
    // }

    // public function update(Request $request, User $user)
    // {
    //     //
    // }

    // public function destroy(User $user)
    // {
    //     //
    // }

    public function avatar(StoreAvatarPostRequest $request)
    {
        $data = $request->validated();
        // dd($data);

        $user = Auth()->user();

        // TODO xriazete to if
        if ($request->hasFile('avatar')) {
            $oldAvatar = Image::where('imageable_type', '=', 'App\Models\User')
                ->where('imageable_id', '=', $user->id)
                ->first();

            $path = $request->file('avatar')->store('public/avatar');
            $user->image()->save(
                Image::make([
                    'path' => Storage::url($path),
                ])
            );

            if ($oldAvatar) 
            {
                $oldAvatar->delete();
            }
        }

        return Redirect::route('users.show', ['user'=> $user->name]);
    }


}
