<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Itinerary extends Model
{
    use HasFactory;

    protected $table = "itineraries";
    protected $fillable = [
        'name',
        'parent_id',

        
    ];



    public function trips()
    {
        return $this->belongsToMany(Trip::class, 'itinerarytrip', 'itinerary_id', 'trip_id');
    }


}
