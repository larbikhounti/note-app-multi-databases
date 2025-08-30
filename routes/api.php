<?php

use App\Http\Controllers\CompanyController;
use Illuminate\Support\Facades\Route;



foreach (config('tenancy.central_domains') as $domain) {
    Route::domain($domain)->group(function () {
        Route::post('/tenants', [CompanyController::class, 'create']);
    });
}