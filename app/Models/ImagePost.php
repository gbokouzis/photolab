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
        'lens',
        'dimensions',
        'user_id',
        'category_id',
    ];

    protected $hidden = ['pivot'];
    
    public function user()
    {
        return $this->belongsTo('\App\Models\User');
    }
    
    public function comments()
    {
        return $this->hasMany('\App\Models\Comment')->descCommentsWithFullRelations();
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
    
    // scope
    public function scopeDesc(Builder $query)
    {
        return $query->orderBy(static::CREATED_AT, 'desc');
    }

    public function tagWithContent()
    {
        return $this->belongsToMany('\App\Models\Tag', 'image_post_tags')->select(array('content'));
    }
    
    public function scopeImagePostCategoryWithUsers(Builder $query, $id) 
    {
        return $query->desc()
            ->where('category_id', '=', $id)
            ->with('user');
    }
}