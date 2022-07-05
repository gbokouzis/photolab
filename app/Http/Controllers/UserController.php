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

    public function show(User $user)
    {
        // dd($user);
        return Inertia::render('Profile/Show', [
            'user' => $user
        ]);
    }
}
