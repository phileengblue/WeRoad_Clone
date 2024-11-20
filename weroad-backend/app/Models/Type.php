<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Type extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

   /* public function triptype(): HasMany
    {
        return $this->hasMany(TripTypes::class);
    }
    */
    public function trips(): BelongsToMany
    {
        return $this->belongsToMany(Trip::class, 'triptypes', 'type_id', 'trip_id');
    }
}
