<?php

namespace App\Http\Controllers;

use App\Http\services\TenantService;
use Illuminate\Http\Request;

class TenantController extends Controller
{
    protected $tenantService;

    public function __construct(TenantService $tenantService)
    {
        $this->tenantService = $tenantService;
    }

    public function create(Request $request)
    {
        // Validate and create the tenant
        $data = $request->validate([
            'id' => 'required|string|max:255',
            'name' => 'required|string|max:255',
             'email' => 'required|string|email|max:255',
        ]);
       //dd($data);

        $tenant = $this->tenantService->createTenant($data);

      return response()->json($tenant, 201);
    }
}
