<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\RelationshipController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/home', function () {
    return Inertia::render('Welcome');
});

Route::resource('posts', \App\Http\Controllers\ImagePostController::class)->middleware('auth');

Route::get('users', [\App\Http\Controllers\UserController::class, 'index']);
Route::get('users/{user:name}', [\App\Http\Controllers\UserController::class, 'show'])->name('users.show');

// Route::get('users/{user:name}/following', [RelationshipController::class, 'following'])->name('users.following');
// Route::get('users/{user:name}/followers', [RelationshipController::class, 'followers'])->name('users.followers');

// Route::get('/follow/{user:name}', [RelationshipController::class, 'follow'])->name('follow');
// Route::get('/unfollow/{user:name}', [RelationshipController::class, 'unfollow'])->name('unfollow');
// Route::get('/follower/{user:name}', [RelationshipController::class, 'follower'])->name('follower');




Route::get('/register', [RegisterController::class, 'create'])->middleware('guest')->name('register');
Route::post('/register', [RegisterController::class, 'store'])->name('register.store');

Route::get('/login', [LoginController::class, 'create'])->middleware('guest')->name('login');
Route::post('/login', [LoginController::class, 'store'])->name('login.store');

Route::post('/logout', [LoginController::class, 'destroy'])->middleware('auth')->name('logout');
