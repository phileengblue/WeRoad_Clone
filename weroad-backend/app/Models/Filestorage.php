<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Filestorage extends Model
{
    use HasFactory;
    protected $table = 'filestorage';
    protected $fillable = [
        'path',
        'name',
        'type',
        'extension'

    ];

    public function user(): HasMany
    {
        return $this->hasMany(User::class);
    }

    public function trip(): HasMany
    {
        return $this->hasMany(Trip::class);
    }

    public function month(): HasMany
    {
        return $this->hasMany(Month::class);
    }
}
