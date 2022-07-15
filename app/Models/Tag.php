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
    
    protected $hidden = ['pivot'];

    public function imagePosts()
    {
        return $this->belongsToMany('\App\Models\ImagePost', 'image_post_tags')->withTimestamps();
    }
}
