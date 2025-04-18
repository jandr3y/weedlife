<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::prefix('users')->group(function(){
    Route::get('/', [UserController::class, 'get']);
    Route::post('/', [UserController::class, 'store']);
});