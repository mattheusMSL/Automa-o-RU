<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class StudentRegisteredController extends Controller {
    
    public function create(): Response { 
        return Inertia::render('Auth/Register'); 
    }

    public function store(Request $request): RedirectResponse{
        $request->validate([
            'ra' => 'required|unique:'. Student::class,
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'. Student::class,
            'course' => 'required|string|string|lowercase|max:255',
            'password' => ['required', 'min:8', 'confirmed', Rules\Password::defaults()],
        ]);

        $student = Student::create([
            'ra' => $request->ra,
            'name' => $request->name,
            'email' => $request->email,
            'course' => $request->course,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($student));

        auth::login($student);

        return redirect(route('dashboard', absolute: false));
    }
}
