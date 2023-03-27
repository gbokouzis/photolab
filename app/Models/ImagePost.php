<?php

namespace App\Models;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImagePost extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
        'location',
        'camera',
        'iso',
        'aperture',
        'height',
        'width',
        'user_id',
        'category_id',
        'location_id',
    ];

    protected $hidden = ['pivot'];

    public function user()
    {
        return $this->belongsTo('\App\Models\User');
    }


    public function category()
    {
        return $this->belongsTo('\App\Models\Category');
    }

    public function tags()
    {
        return $this->belongsToMany('\App\Models\Tag', 'image_post_tags')->withTimestamps();
    }

    public function image()
    {
        return $this->morphOne('\App\Models\Image', 'imageable');
    }

    public function likes()
    {
        return $this->hasMany('\App\Models\Like');
    }

    public function location()
    {
        return $this->belongsTo('\App\Models\Location');
    }

    // scope
    public function scopeDesc(Builder $query)
    {
        return $query->orderBy(static::CREATED_AT, 'desc');
    }

    public function tagWithName()
    {
        return $this->belongsToMany('\App\Models\Tag', 'image_post_tags')->select(array('name'));
    }

}
