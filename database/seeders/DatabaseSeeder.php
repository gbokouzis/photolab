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
        $this->call([ 
            UsersSeeder::class,
            CategoriesSeeder::class,
            ImagePostsSeeder::class,
            CommentsSeeder::class, 
            TagsSeeder::class, 
            ImagePostTagSeeder::class, 
            ImageSeeder::class, 
        ]);

    }
}
