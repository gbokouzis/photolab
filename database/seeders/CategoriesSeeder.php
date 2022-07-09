<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = ['Science', 'Sport', 'Politics', 'Entartainment', 'Economy'];

        foreach($categories as $category) {
            Category::create(['content' => $category]);
        }
    }
}
