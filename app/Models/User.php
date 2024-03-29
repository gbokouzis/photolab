<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'username',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function imagePosts()
    {
        return $this->hasMany('\App\Models\ImagePost');
    }

    public function comments()
    {
        return $this->hasMany('\App\Models\Comment');
    }

    public function image()
    {
        return $this->morphOne('\App\Models\Image', 'imageable');
    }

    public function followers()
    {
        return $this->belongsToMany('\App\Models\User', 'relationships', 'followed_id', 'follower_id')
        ->withTimestamps();
    }

    public function followings()
    {
        return $this->belongsToMany('\App\Models\User', 'relationships', 'follower_id', 'followed_id')
        ->withTimestamps();
    }

    public function likes() 
    {
        return $this->hasMany('\App\Models\ImagePost');
    }

}
