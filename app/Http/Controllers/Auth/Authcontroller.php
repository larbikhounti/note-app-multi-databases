<?php

namespace App\Http\Controllers\Auth;

use AuthService;
use Illuminate\Http\Request;

class AuthController
{
    protected $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        return $this->authService->authenticate($data);
    }

    
}
