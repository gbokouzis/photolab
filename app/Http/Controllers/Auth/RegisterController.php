<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/Register');
    }
    
    public function store(StoreRegisterRequest $request)
    {
        $validatedReqest = $request->validated();
        $validatedReqest['password'] = bcrypt($validatedReqest['password']);
        $user = User::create($validatedReqest);
        
        Auth::login($user);
        
        return Redirect::route('posts.index');
    }
}
