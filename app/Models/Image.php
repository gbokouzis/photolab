<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'path',
        'image_post_id',
    ];

    public function imagePost() 
    {
        return $this->belongsTo('App\Models\ImagePost');
    }
}
