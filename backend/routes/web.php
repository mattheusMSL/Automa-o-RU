<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StudentController;

Route::get('/', function () {
    return 'rodando';
});

Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);

Route::prefix('student', StudentController::class)->group(function () {
     Route::get('/', [StudentController::class, 'index'])->name('student.list');
})->middleware(['auth', 'verified']); 