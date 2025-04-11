<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CashbackController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/users', [UserController::class, 'store']);
Route::post('/auth/login', [AuthController::class, 'login']);
// Route::prefix('users')->group(function(){
//     Route::get('/', [UserController::class, 'get']);
// })->middleware('auth:sanctum');

Route::prefix('/users')->middleware(['auth:api'])->group(function() {
    Route::get('/me', [UserController::class, 'me']);
    Route::put('/', [UserController::class, 'update']);
});

Route::prefix('/cashback')->middleware(['auth:api'])->group(function(){
    Route::get('/details', [CashbackController::class, 'getDetails']);
    Route::get('/history', [CashbackController::class, 'history']);
});