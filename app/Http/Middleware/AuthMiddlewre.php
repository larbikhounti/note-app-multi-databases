<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $header = $request->headers->get('Authorization');
        if (!$header) {
            return response()->json(['message' => 'Authorization header missing'], Response::HTTP_UNAUTHORIZED);
        }

        // Here you would typically validate the token and authenticate the user
        return $next($request);
    }
}
