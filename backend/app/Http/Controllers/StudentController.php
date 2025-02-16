<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class StudentController extends Controller {
    /**
     * Display a listing of students.
     */
    public function index() {
        $students = Student::all();
        return response()->json($students);
    }

    /**
     * Store a newly created student in storage.
     */
    public function store(Request $request) {
        $request->validate([
            'ra' => 'required|unique:' . Student::class,
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:'. Student::class,
            'course' => 'required|string|max:255',
            'password' => 'required|string|min:8',
        ]);

        $student = new Student();
        $student->ra = $request->ra;
        $student->name = $request->name;
        $student->email = $request->email;
        $student->course = $request->course;
        $student->is_active = true;
        $student->tokens_available = 0;
        $student->password = Hash::make($request->password);
        $student->save();

        return response()->json(['message' => 'Student created successfully', 'student' => $student], 201);
    }

    /**
     * Display the specified student.
     */
    public function show($id)
    {
        $student = Student::find($id);

        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        return response()->json($student);
    }

    /**
     * Update the specified student in storage.
     */
    public function update(Request $request, $id)
    {
        $student = Student::find($id);

        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        $student->update($request->all());
        return response()->json(['message' => 'Student updated successfully', 'student' => $student]);
    }

    /**
     * Remove the specified student from storage.
     */
    public function destroy($id)
    {
        $student = Student::find($id);

        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        $student->delete();
        return response()->json(['message' => 'Student deleted successfully']);
    }
}
