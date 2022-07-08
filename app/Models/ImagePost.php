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
    ];

    public function user()
    {
        return $this->belongsTo('\App\Models\User');
    }

    public function comments()
    {
        return $this->hasMany('\App\Models\Comment')->descCommentsWithFullRelations();
    }

    public function tags()
    {
        return $this->belongsToMany('\App\Models\Tag', 'image_post_tags')->withTimestamps();
    }

    public function scopeDesc(Builder $query)
    {
        return $query->orderBy(static::CREATED_AT, 'desc');
    }
    
}