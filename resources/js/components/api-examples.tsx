import React from 'react';

export function ApiExamples() {
    const examples = [
        {
            title: '📝 User Registration',
            method: 'POST',
            endpoint: '/api/register',
            description: 'Register a new user account',
            code: `curl -X POST ${window.location.origin}/api/register \\
  -H "Content-Type: application/json" \\
  -H "Accept: application/json" \\
  -d '{
    "name": "John Doe",
    "email": "john@example.com", 
    "password": "password123",
    "password_confirmation": "password123"
  }'`,
            response: `{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2024-01-01T00:00:00.000000Z",
    "updated_at": "2024-01-01T00:00:00.000000Z"
  },
  "token": "1|abc123..."
}`
        },
        {
            title: '🔑 User Login',
            method: 'POST', 
            endpoint: '/api/login',
            description: 'Authenticate user and get API token',
            code: `curl -X POST ${window.location.origin}/api/login \\
  -H "Content-Type: application/json" \\
  -H "Accept: application/json" \\
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'`,
            response: `{
  "message": "Login successful",
  "user": {
    "id": 1,
    "name": "John Doe", 
    "email": "john@example.com",
    "created_at": "2024-01-01T00:00:00.000000Z",
    "updated_at": "2024-01-01T00:00:00.000000Z"
  },
  "token": "2|def456..."
}`
        },
        {
            title: '👤 Get User Profile',
            method: 'GET',
            endpoint: '/api/user',
            description: 'Get authenticated user information',
            code: `curl -X GET ${window.location.origin}/api/user \\
  -H "Accept: application/json" \\
  -b "laravel_session=YOUR_SESSION_COOKIE"`,
            response: `{
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com", 
    "created_at": "2024-01-01T00:00:00.000000Z",
    "updated_at": "2024-01-01T00:00:00.000000Z"
  }
}`
        },
        {
            title: '🚪 User Logout',
            method: 'DELETE',
            endpoint: '/api/logout',
            description: 'Destroy current session',
            code: `curl -X DELETE ${window.location.origin}/api/logout \\
  -H "Accept: application/json" \\
  -b "laravel_session=YOUR_SESSION_COOKIE"`,
            response: `{
  "message": "Logged out successfully"
}`
        }
    ];

    return (
        <div className="mt-8 space-y-8">
            <h2 className="text-2xl font-bold text-center mb-6">🛠️ API Documentation</h2>
            
            {examples.map((example, index) => (
                <div key={index} className="rounded-lg border border-[#19140035] p-6 dark:border-[#3E3E3A]">
                    <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-lg font-semibold">{example.title}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-mono ${
                            example.method === 'GET' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        }`}>
                            {example.method}
                        </span>
                    </div>
                    
                    <p className="text-[#706f6c] dark:text-[#A1A09A] mb-4">{example.description}</p>
                    
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium mb-2">Request:</h4>
                            <pre className="bg-[#f8f9fa] dark:bg-[#1a1a19] p-3 rounded text-sm overflow-x-auto">
                                <code>{example.code}</code>
                            </pre>
                        </div>
                        
                        <div>
                            <h4 className="font-medium mb-2">Response:</h4>
                            <pre className="bg-[#f8f9fa] dark:bg-[#1a1a19] p-3 rounded text-sm overflow-x-auto">
                                <code>{example.response}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            ))}
            
            <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 mb-4">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🚀 Laravel Sanctum Installation:</h4>
                <div className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                    <p>To enable real token authentication, install Laravel Sanctum:</p>
                    <pre className="bg-blue-100 dark:bg-blue-800/30 p-2 rounded font-mono text-xs">
composer require laravel/sanctum{"\n"}
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"{"\n"}
php artisan migrate
                    </pre>
                    <p>Then add <code>HasApiTokens</code> trait to your User model.</p>
                </div>
            </div>

            <div className="rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">💡 Current Implementation Notes:</h4>
                <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                    <li>• Currently using session-based authentication (simulated tokens)</li>
                    <li>• Install Laravel Sanctum for real stateless API token authentication</li>
                    <li>• All endpoints return JSON responses with proper validation</li>
                    <li>• Password must be at least 8 characters for registration</li>
                    <li>• Email validation and uniqueness is enforced</li>
                </ul>
            </div>
        </div>
    );
}