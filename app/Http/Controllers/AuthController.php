<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Store a newly created user (registration).
     */
    public function store(RegisterRequest $request): JsonResponse
    {
        $user = User::create([
            'name' => $request->validated()['name'],
            'email' => $request->validated()['email'],
            'password' => Hash::make($request->validated()['password']),
        ]);

        // Simulate token creation without Sanctum
        $token = base64_encode(Str::random(40));
        
        // Log the user in
        Auth::login($user);

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user->fresh(),
            'token' => $token,
            'note' => 'Install Laravel Sanctum for real token authentication'
        ], 201);
    }

    /**
     * Create an authentication session (login).
     */
    public function create(LoginRequest $request): JsonResponse
    {
        $credentials = $request->validated();

        if (!Auth::attempt($credentials)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $user = Auth::user();
        
        // Simulate token creation without Sanctum
        $token = base64_encode(Str::random(40));

        return response()->json([
            'message' => 'Login successful',
            'user' => $user,
            'token' => $token,
            'note' => 'Install Laravel Sanctum for real token authentication'
        ]);
    }

    /**
     * Remove the authentication session (logout).
     */
    public function destroy(Request $request): JsonResponse
    {
        Auth::logout();
        
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }

    /**
     * Display the authenticated user.
     */
    public function show(Request $request): JsonResponse
    {
        return response()->json([
            'user' => $request->user()
        ]);
    }
}