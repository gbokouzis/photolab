<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAvatarPostRequest;
use App\Models\Image;
use App\Models\Relationship;
use App\Models\User;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UserController extends Controller
{

    use SoftDeletes;

    public function index()
    {
        $users = User::onlyTrashed()->with('image')->get();
        // dd($users);
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

        $countFollowers = $user->followers()->count();
        $countFollowings = $user->followings()->count();
        $countPosts = $user->imagePosts()->count();

        // dd($countFollowers, $countFollowings, $countPosts);

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
            'countFollowers' => $countFollowers,
            'countFollowings' => $countFollowings,
            'countPosts' => $countPosts
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

    public function destroy(User $user)
    {
        // dd($user);
        $user->delete();
        // $user->forceDelete();

        return redirect()->route('users.banned');
    }
    public function restore($id)
    {
        $user = User::onlyTrashed()->findOrFail($id);
        $user->restore();

        return redirect()->route('users.banned');
    }

    public function avatar(StoreAvatarPostRequest $request)
    {
        // dd($image);
        $data = $request->validated();
        dd($data);

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
                $oldAvatar->softDeletes();
            }
        }

        return Redirect::route('users.show', ['user'=> $user->name]);
    }


}
