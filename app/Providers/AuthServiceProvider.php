<?php

namespace App\Providers;

use App\Models\HybridPersonalAccessToken;
use Illuminate\Support\ServiceProvider;
use Laravel\Sanctum\Sanctum;

class AuthServiceProvider extends ServiceProvider
{
    public function boot()
    {
       
    }

}
