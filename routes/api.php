<?php

use App\Http\Controllers\TenantController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/tenant', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



foreach (config('tenancy.central_domains') as $domain) {
    Route::domain($domain)->group(function () {
       Route::post('/tenants', [TenantController::class, 'create']);
    });
}