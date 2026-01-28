<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class TodoController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $todos = $request->user()->todos()->orderBy('created_at', 'desc')->get();
        return response()->json($todos);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'completed' => 'boolean',
        ]);

        $todo = $request->user()->todos()->create($validated);
        return response()->json($todo, 201);
    }

    public function show(Request $request, Todo $todo): JsonResponse
    {
        // Проверяем, что задача принадлежит текущему пользователю
        if ($todo->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Доступ запрещен'], 403);
        }

        return response()->json($todo);
    }

    public function update(Request $request, Todo $todo): JsonResponse
    {
        // Проверяем, что задача принадлежит текущему пользователю
        if ($todo->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Доступ запрещен'], 403);
        }

        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'completed' => 'boolean',
        ]);

        $todo->update($validated);
        return response()->json($todo);
    }

    public function destroy(Request $request, Todo $todo): JsonResponse
    {
        // Проверяем, что задача принадлежит текущему пользователю
        if ($todo->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Доступ запрещен'], 403);
        }

        $todo->delete();
        return response()->json(null, 204);
    }
}
