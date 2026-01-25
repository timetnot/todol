<?php

namespace App\Http\Middleware;

use Illuminate\Http\Middleware\HandleCors as Middleware;

class HandleCors extends Middleware
{
    /**
     * Get the path patterns that should be used for CORS.
     *
     * @return array<int, string>
     */
    protected function paths(): array
    {
        return [
            'api/*',
            'sanctum/csrf-cookie',
        ];
    }
}
