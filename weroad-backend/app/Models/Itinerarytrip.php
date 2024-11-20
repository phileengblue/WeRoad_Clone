<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Itinerarytrip extends Model
{
    use HasFactory;
    protected $table = "itinerarytrip";

    protected $fillable = [

        'itinerary_id',
        'trip_id'
    ];

    public function itineraries(): BelongsTo
    {
        return $this->belongsTo(Itinerary::class, 'itinerary_id', 'id');
    }

    public function trips(): BelongsTo
    {
        return $this->belongsTo(Trip::class, 'trip_id', 'id');
    }
}
