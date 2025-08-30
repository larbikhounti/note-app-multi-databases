<?php

namespace App\Http\services;

use App\Models\Company;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class CompanyService
{
    public function createCompany(array $data)
    {

        try {
            
            if (Company::where('id', $data['name'])->exists()) {
                return response()->json(['error' => 'Tenant already exists.'], Response::HTTP_CONFLICT);
            }

            $tenant = new Company();
            $tenant->name = $data['name'];
            $tenant->email = $data['email'];
            $tenant->save();

            $tenant->domains()->create([
                'domain' => $data['name'],
            ]);

            return response()->json($tenant, 201);

        } catch (\Throwable $th) {


            Log::Error('Error creating tenant: ' . $th->getMessage());
            return response()->json(['error' => 'Failed to create tenant: '], 500);
        }
    }
}
