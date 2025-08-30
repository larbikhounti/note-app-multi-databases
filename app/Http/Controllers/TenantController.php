<?php

namespace App\Http\Controllers;

use App\Http\services\CompanyService;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    protected $companyService;

    public function __construct(CompanyService $companyService)
    {
        $this->companyService = $companyService;
    }

    public function create(Request $request)
    {
        // Validate and create the company
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
        ]);

       return $this->companyService->createCompany($data);
    }
}
