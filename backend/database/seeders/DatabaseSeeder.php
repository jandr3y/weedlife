<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Master Weed',
            'email' => 'master@account.com',
            'password' => bcrypt('testing'),
            'phone' => '999999999',
            'birthdate' => '1997-01-01',
            'invite_code' => '000000',
            'role' => 'ADMIN'
        ]);
    }
}
