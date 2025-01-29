<?php

use App\Http\Controllers\UserController;

Route::apiResource('users', UserController::class);

Route::prefix('users')->group(function () {
      Route::get('users/{id}', [UserController::class, 'show'])->name('user.show');  // busca o usuaário por id e retorna o primeiro usuário que é identico ao id 
      Route::post('users/', [UserController::class, 'store'])->name('user.store');
      Route::delete('users/{id}',[UserController::class, 'destroy'] )->name('user.destroy');
      Route::patch('users/{id}', [UserCcontroller::class, 'update'])->name('user.update');
});
