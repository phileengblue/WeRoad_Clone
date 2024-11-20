<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Trip extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'start_date',
        'end_date',
        'status',
        'max_slots',
        'min_slots',
        'price',
        'duration',
        'expired',
        'filestorage_id',
        'user_id',
        
    ];

    

    public function itineraries()
    {
        return $this->belongsToMany(Itinerary::class, 'itinerarytrip', 'trip_id', 'itinerary_id');
    }


    public function filestorage(): BelongsTo
    {
        return $this->belongsTo(Filestorage::class);
    }

    public function description(): Hasone
    {
        return $this->hasone(Description::class, 'trip_id');
    }

    public function images()
    {
        return $this->belongsToMany(Image::class, 'image_trips');
    }

   /* public function triptype(): HasMany
    {
        return $this->hasMany(TripTypes::class);
    }
*/
    public function reservation(): HasMany
    {
        return $this->hasMany(Reservation::class);
    }

    public function review(): HasMany
    {
        return $this->hasMany(Review::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function types():BelongsToMany
    {
        return $this->belongsToMany(Type::class, 'triptypes', 'trip_id', 'type_id');
    }

    public function eta(): HasOne
    {
        return $this->hasone(Eta::class);
    }







}
