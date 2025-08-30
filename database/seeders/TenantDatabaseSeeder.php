<?php

namespace Database\Seeders;

use App\Models\Note;
use App\Models\User;
use Illuminate\Database\Seeder;

class TenantDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user1 = User::create([
            'name' => 'user1',
            'email' => 'user1@local.test',
            'password' => bcrypt('password'),
        ]);
        $user2 = User::create([
            'name' => 'user2',
            'email' => 'user2@local.test',
            'password' => bcrypt('password'),
        ]);

        $user1->notes()->createMany([
            ['content' => 'diif tentnatrnThis is the first note for user1.'],
            ['content' => 'diif tentnatrnThis is the second note for user1.'],
            ['content' => 'diif tentnatrnThis is the third note for user1.'],
        ]);
        $user2->notes()->createMany([
            ['content' => 'This is the first note for user2.'],
            ['content' => 'This is the second note for user2.'],
            ['content' => 'This is the third note for user2.'],
        ]);
    }
}
