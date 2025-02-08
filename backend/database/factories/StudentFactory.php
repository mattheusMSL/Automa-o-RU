<?php

namespace Database\Factories;

use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class StudentFactory extends Factory
{
    protected $model = Student::class;

    public function definition(): array
    {
        return [
            'ra' => $this->faker->unique()->numerify('######'),  // 6-digit RA
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'course' => $this->faker->randomElement(['Computer Science', 'Engineering', 'Mathematics']),
            'tokens_available' => $this->faker->numberBetween(0, 10),
            'is_active' => true,
            'password' => bcrypt('password'), // Default password
        ];
    }
}
