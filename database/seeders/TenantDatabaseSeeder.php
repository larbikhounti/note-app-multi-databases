<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class TenantDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'user1',
            'email' => 'user1@local.test',
            'password' => bcrypt('password'),
        ]);
        User::create([
            'name' => 'user2',
            'email' => 'user2@local.test',
            'password' => bcrypt('password'),
        ]);
    }
}
