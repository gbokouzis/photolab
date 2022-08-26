<?php

namespace Database\Seeders;

use App\Models\Image;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $images = [
            '/storage/images/photo1.jpg',
            '/storage/images/photo2.jpg',
            '/storage/images/photo3.jpg',
            '/storage/images/photo4.jpg',
            '/storage/images/photo5.jpg',
            '/storage/images/photo6.jpg',
        ];

        $posts = \App\Models\ImagePost::all();

        foreach($posts as $post) {
            $n = random_int(0, 5);
            Image::create([
                'path' => $images[$n],
                'imageable_type' => 'App\Models\ImagePost',
                'imageable_id' => $post->id
            ]);
        }
    }
}
