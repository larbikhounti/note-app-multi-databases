<?php

namespace App\Http\services;

use App\Models\Company;
use Illuminate\Support\Facades\Log;

class TenantService
{
    public function createTenant(array $data) 
    {
        try {
            $tenant = Company::create([
                'id' => $data['id'],
                'data' => [
                    'name'  => $data['name'],
                    'email' => $data['email'],
                ],
            ]);
            $tenant->domains()->create([
                'domain' => $data['name'],
            ]);
            return $tenant;
        } catch (\Throwable $th) {
            Log::debug('An informational message.' . $th->getMessage());
            return 'Failed to create tenant: ' . $th->getMessage();
        }
    }
}
