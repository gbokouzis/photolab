<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'user_id',
        'image_post_id',
    ];

    public function imagePost()
    {
        return $this->belongsTo('\App\Models\ImagePost');
    }

    public function user()
    {
        return $this->belongsTo('\App\Models\User');
    }
}
