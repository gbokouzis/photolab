<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\LikedImagePostController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\RelationshipController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\TagController;
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
Route::get('/test', function () {
    return Inertia::render('Posts/Testt');
});



// Route::get('/search{search}', [\App\Http\Controllers\SearchController::class, 'search']);
// Search
Route::get('/search/users', [SearchController::class, 'users_search']);
Route::get('/search/tags', [SearchController::class, 'tags_search']);
Route::get('/search/locations', [SearchController::class, 'locations_search']);

// Posts
Route::get('/', [\App\Http\Controllers\ImagePostController::class, 'index'])->name('posts.index');
Route::resource('posts', \App\Http\Controllers\ImagePostController::class)->middleware('auth')->only(['create', 'store', 'show', 'edit', 'update', 'destroy']);;
Route::get('/following', [\App\Http\Controllers\ImagePostController::class, 'posts_following'])->middleware('auth')->name('posts.followng');

// Resource categories
Route::resource('categories', \App\Http\Controllers\CategoryController::class)->middleware('auth');

// Users
Route::get('users', [\App\Http\Controllers\UserController::class, 'index']);
Route::get('users/{user:name}', [\App\Http\Controllers\UserController::class, 'show'])->name('users.show');
Route::post('/users/avatar', [\App\Http\Controllers\UserController::class, 'avatar']);

// Show followings followers
Route::get('users/{user:name}/followings', [RelationshipController::class, 'followings'])->name('followings');
Route::get('users/{user:name}/followers', [RelationshipController::class, 'followers'])->name('followers');

// Follow Unfillow
Route::post('/{user:name}/follow/{id}', [RelationshipController::class, 'follow'])->name('follow');
Route::delete('/{user:name}/unfollow/{id}', [RelationshipController::class, 'unfollow'])->name('unfollow');

// Like Unlike
Route::post('/posts/{imagepost}/like', [LikedImagePostController::class, 'like']);
Route::post('/posts/{imagepost}/unlike', [LikedImagePostController::class, 'unlike']);
// Route::post('/posts/{imagepost}/like', [LikedImagePostController::class, 'toggle']);

// Tags
Route::get('/tags/{tag:name}', [TagController::class, 'show'])->name('tags.show');

// Location
Route::get('/locations/{location:country_city}', [LocationController::class, 'show'])->name('locations.show');

// Auth
Route::get('/register', [RegisterController::class, 'create'])->middleware('guest')->name('register');
Route::post('/register', [RegisterController::class, 'store'])->name('register.store');

Route::get('/login', [LoginController::class, 'create'])->middleware('guest')->name('login');
Route::post('/login', [LoginController::class, 'store'])->name('login.store');

Route::post('/logout', [LoginController::class, 'destroy'])->middleware('auth')->name('logout');
