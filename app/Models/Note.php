<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    protected $fillable = ['content'];

    protected $casts = [
        'content' => 'string',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
