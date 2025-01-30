<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return 'rodando';
});

Route::get('/users', [UserController::class, 'index']);

route::get('/users/{id}', [UserController::class, 'show']);