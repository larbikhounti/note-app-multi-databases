<?php

use App\Http\Controllers\Company\CompanyController;
use Illuminate\Support\Facades\Route;


// this insuring that the company is created in the correct tenant context (central domain)
foreach (config('tenancy.central_domains') as $domain) {
    Route::domain($domain)->group(function () {
        Route::post('/companies', [CompanyController::class, 'create']);
    });
}