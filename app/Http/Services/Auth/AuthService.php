<?php

namespace App\Http\Services\Auth;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;

class AuthService
{
    public function authenticate($credentials)
    {
        $email = $credentials['email'];
        $password = $credentials['password'];

        $user = $this->checkIfUserExists($email);
        if (!$user) {
            return response()->json(['message' => 'User not found'], Response::HTTP_NOT_FOUND);
        }
        if (!$this->validatePassword($password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], Response::HTTP_UNAUTHORIZED);
        }

        return response()->json(
            [
                'token' => $user->createToken('auth_token')->plainTextToken,
                'email' => $user->email,
                'name' => $user->name
            ],
            Response::HTTP_OK
        );
    }


    private function checkIfUserExists($email): User | null
    {
        return  User::where('email', $email)->first();
    }

    private function validatePassword($password, $currentPassword)
    {
        return Hash::check($password, $currentPassword);
    }
}
