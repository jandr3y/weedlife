<?php

use App\Exceptions\ApplicationException;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        //
    })
    ->withExceptions(function (Exceptions $exceptions) {
        $exceptions->render(function (Exception $e, Request $request) {
            if ($request->is('api/*')) {
                if ($e instanceof ValidationException) {
                    return response()->json($e->errors(), 400);
                }
                
                if ($e instanceof ApplicationException) {
                    return response()->json([
                        'message' => $e->getMessage()
                    ], $e->getCode());
                }

                return response()->json([
                    'message' => $e->getMessage()
                ], 500);
            }
        });
    })->create();
