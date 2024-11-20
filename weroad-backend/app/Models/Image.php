<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'path',
        'name',
        'extension',
    ];

    public function trips()
    {
        return $this->belongsToMany(Trip::class, 'image_trips');
    }
}
