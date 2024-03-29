<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Relationship extends Model
{
    use HasFactory;

    protected $fillable = [
        'folloer_id',
        'folloed_id',
    ];

    public function user()
    {
        return $this->belongsTo('\App\Models\User');
    }
}