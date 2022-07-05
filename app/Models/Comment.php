<?php

namespace App\Models;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    public function imagePost()
    {
        return $this->belongsTo('\App\Models\ImagePost');
    }

    public function user()
    {
        return $this->belongsTo('\App\Models\User');
    }

    public function scopeDesc(Builder $query)
    {
        return $query->orderBy(static::CREATED_AT, 'desc');
    }

    public function scopeDescCommentsWithFullRelations(Builder $query) 
    {
        return $query->desc()
            ->with('user');
    }
}
