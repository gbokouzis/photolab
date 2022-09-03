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

    public function __construct()
    {
        $this->middleware('auth')
            ->only([
                'index',
                'show', 
                'destroy',
                'ban',
                'restore',
                'avatar',
            ]);
    }

    // * Return all banned users if login user is admin
    public function index()
    {
        $this->authorize('viewAny', Auth()->user());
        $users = User::onlyTrashed()->with('image')->get();
        
        return Inertia::render('Profile/Index', compact('users'));
    }

    // public function create()
    // {
    // }

    // public function store(Request $request)
    // {
    // }

    // * Show profile
    // Return user with image profile, the photos uploaded by the user, 
    // the number of photos, followers and followed and 
    // if the login user has followed him.  
    public function show(User $user, Request $request)
    {
        $isFollower = Relationship::where('follower_id', Auth()->id())
            ->where('followed_id', $user->id)
            ->exists();

        $profileImg = $user->image()->first();

        $countFollowers = $user->followers()->count();
        $countFollowings = $user->followings()->count();
        $countPosts = $user->imagePosts()->count();

        $posts = $user->imagePosts()->desc()
            ->with('image')
            ->withCount(['likes as liked' => function ($q) {
                $q->where('user_id', Auth()->id());
            }])
            ->withCasts(['liked' => 'boolean'])
            ->paginate();

        if ($request->wantsJson()) {
            return $posts;
        }

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
    // }

    // public function update(Request $request, User $user)
    // {
    // }

    // * Delete with authorization
    public function destroy(User $user)
    {
        $this->authorize('delete', $user);

        $user->forceDelete();

        return redirect()->route('users.banned');
    }

    // * Ban with authorization
    public function ban(User $user)
    {
        $this->authorize('ban', $user);

        $user->delete();

        return redirect()->route('users.banned');
    }

    // * Unban with authorization
    public function restore($id)
    {
        $this->authorize('restore', Auth()->user());

        $user = User::onlyTrashed()->findOrFail($id);
        $user->restore();

        return redirect()->route('users.banned');
    }

    // * Set image profile
    // * Validation request, check if it had an old photo and delete it
    public function avatar(StoreAvatarPostRequest $request)
    {
        $request->validated();

        $user = Auth()->user();

        // if ($request->hasFile('avatar'))
        $oldAvatar = Image::where('imageable_type', '=', 'App\Models\User')
            ->where('imageable_id', '=', $user->id)
            ->first();

        $path = $request->file('avatar')->store('public/avatar');
        $user->image()->save(
            Image::make([
                'path' => Storage::url($path),
            ])
        );

        if ($oldAvatar) {
            $pathReplace = str_replace('/storage', '', $oldAvatar->path);
            Storage::disk('public')->delete($pathReplace);
            $oldAvatar->delete();
        }
        return Redirect::route('users.show', ['user'=> $user->name]);
    }


}
