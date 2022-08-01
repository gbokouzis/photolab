<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return Inertia::render('Profile/Index', compact('users'));
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(User $user)
    {
        // dd($user);
        
        $posts = $user->imagePosts()
            ->with('image')
            ->withCount('likes as likes')
            ->paginate();
            // get();
        return Inertia::render('Profile/Show', [
            'user' => $user,
            'posts' => $posts
        ]);
    }
    
    public function edit(User $user)
    {
        //
    }

    public function update(Request $request, User $user)
    {
        //
    }

    public function destroy(User $user)
    {
        //
    }
}
