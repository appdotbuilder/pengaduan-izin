<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

// API Routes for Authentication (Session-based)
Route::prefix('api')->group(function () {
    // Authentication routes
    Route::post('/register', [AuthController::class, 'store']); // User registration
    Route::post('/login', [AuthController::class, 'create']); // Create session (login)
    
    // Protected routes
    Route::middleware('auth')->group(function () {
        Route::delete('/logout', [AuthController::class, 'destroy']); // Destroy session (logout)
        Route::get('/user', [AuthController::class, 'show']); // Show authenticated user
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
