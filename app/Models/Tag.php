<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
    ];

    public function imagePosts()
    {
        return $this->belongsToMany('\App\Models\ImagePost', 'image_post_tags')->withTimestamps();
    }
}
