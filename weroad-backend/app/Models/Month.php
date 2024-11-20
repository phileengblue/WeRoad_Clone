<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Month extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'title',
        'subTitle',
        'descriptionTitle',
        'descriptionSubTitle',
        'description',
        'tableTitle',
        'filestorage_id',
        
        
    ];

    public function filestorage(): BelongsTo
    {
        return $this->belongsTo(Filestorage::class);
    }
}
