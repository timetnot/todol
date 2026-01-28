<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'message' => 'Todo API Backend',
        'version' => '1.0.0',
        'endpoints' => [
            'GET /api/todos' => 'List all todos',
            'POST /api/todos' => 'Create a new todo',
            'GET /api/todos/{id}' => 'Get a specific todo',
            'PUT /api/todos/{id}' => 'Update a todo',
            'DELETE /api/todos/{id}' => 'Delete a todo'
        ]
    ]);
});
