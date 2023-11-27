<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/search', [UserController::class, 'search']);
Route::post('/update-game-account', [UserController::class, 'updateGameAccount']);

Route::get('/', function () {
    return view('welcome');
});
