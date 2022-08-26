<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if ( $this->command->confirm('To create the user and userAdmin?', true) ) {
            \App\Models\User::factory()->create([
                'name' => 'user',
                'email' => 'user@user.com',
                'password' => '$2y$10$Vupku9MJKizQdd0fpFxizO6pv0mahn8ZWSV6KznBoYMLLHlaXbSWK',
            ]);
            \App\Models\User::factory()->create([
                'name' => 'userAdmin',
                'email' => 'userAdmin@user.com',
                'password' => '$2y$10$Vupku9MJKizQdd0fpFxizO6pv0mahn8ZWSV6KznBoYMLLHlaXbSWK',
                'is_admin' => true
            ]);
        }

        $u = $this->command->ask('How many users to create?', 3);
        \App\Models\User::factory($u)->create();

    }
}
