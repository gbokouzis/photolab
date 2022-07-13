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
Route::resource('categories', \App\Http\Controllers\CategoryController::class)->middleware('auth');

Route::get('users', [\App\Http\Controllers\UserController::class, 'index']);
Route::get('users/{user:name}', [\App\Http\Controllers\UserController::class, 'show'])->name('users.show');

Route::get('users/{user:name}/followings', [RelationshipController::class, 'followings'])->name('followings');
Route::get('users/{user:name}/followers', [RelationshipController::class, 'followers'])->name('followers');

Route::post('/{user:name}/follow/{id}', [RelationshipController::class, 'follow'])->name('follow');
Route::delete('/{user:name}/unfollow/{id}', [RelationshipController::class, 'unfollow'])->name('unfollow');




Route::get('/register', [RegisterController::class, 'create'])->middleware('guest')->name('register');
Route::post('/register', [RegisterController::class, 'store'])->name('register.store');

Route::get('/login', [LoginController::class, 'create'])->middleware('guest')->name('login');
Route::post('/login', [LoginController::class, 'store'])->name('login.store');

Route::post('/logout', [LoginController::class, 'destroy'])->middleware('auth')->name('logout');
