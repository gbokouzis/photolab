<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        if ($this->command->confirm('To create the user "user@user.com"?', true)) {
            \App\Models\User::factory()->create([
                'email' => 'user@user.com',
                'password' => '$2y$10$Vupku9MJKizQdd0fpFxizO6pv0mahn8ZWSV6KznBoYMLLHlaXbSWK',
            ]);
        }
        
        $u = $this->command->ask('How many users to create?', 5);
        $p = $this->command->ask('How many posts to create?', 10);
        $c = $this->command->ask('How many comments to create?', 20);
        
        \App\Models\User::factory($u)->create();
        \App\Models\ImagePost::factory($p)->create();  
        \App\Models\Comment::factory($c)->create();
        
        
        // $userB = \App\Models\User::factory()->create([
        //     'email' => 'user1@user.com',
        //     'password' => '$2y$10$Vupku9MJKizQdd0fpFxizO6pv0mahn8ZWSV6KznBoYMLLHlaXbSWK',
        // ]);

        // $userA->follwing()->attach(User::factory(20)->create()->pluck('id'));
        // $userA->follwers()->attach(User::factory(20)->create()->pluck('id'));

        // $userB->follwing()->attach(User::factory(20)->create()->pluck('id'));
        // $userB->follwers()->attach(User::factory(20)->create()->pluck('id'));

    }
}
