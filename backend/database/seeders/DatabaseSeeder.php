<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Student;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
    /**
     * Seed the application's database.
     */
    public function run(): void {
        User::factory()->create([
           'name' => 'admin',
           'email' => 'admin@admin.com',
           'password' => bcrypt('admin123'),
        ]);
        
        // Student::factory()->create([
        //     'ra' => '123456',
        //     'name' => 'Jane Doe',
        //     'email' => 'jane.doe@example.com',
        //     'course' => 'Computer Science',
        //     'tokens_available' => 5,
        //     'is_active' => true,
        //     'password' => bcrypt('password123'),
        // ]);
    }
}
