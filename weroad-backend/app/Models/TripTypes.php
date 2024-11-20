<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TripTypes extends Model
{
    use HasFactory;

    protected $fillable = [
        'type_id',
        'trip_id',
        //'activity_id'
       
    ];

    public function trip(): BelongsTo
    {
        return $this->belongsTo(Trip::class);
    }

    public function type(): BelongsTo
    {
        return $this->belongsTo(Type::class);
    }

   /* public function activity(): BelongsTo
    {
        return $this->belongsTo(Activity::class);
    }
*/}
