<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;

    protected $fillable = [
        'country',
        'city',
        'city_country',
        'country_city',
    ];

    public function imagePosts()
    {
        return $this->hasMany('\App\Models\ImagePost');
    }
}
