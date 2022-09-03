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
            '/storage/images/photo2.jpg',
            '/storage/images/photo3.jpg',
            '/storage/images/photo4.jpg',
            '/storage/images/photo5.jpg',
            '/storage/images/photo6.jpg',
            '/storage/images/photo7.jpg',
            '/storage/images/photo8.jpg',
            '/storage/images/photo9.jpg',
            '/storage/images/photo10.jpg',
            '/storage/images/photo11.jpg',
            '/storage/images/photo12.jpg',
            '/storage/images/photo13.jpg',
            '/storage/images/photo14.jpg',
            '/storage/images/photo15.jpg',
            '/storage/images/photo16.jpg',
            '/storage/images/photo17.jpg',
            '/storage/images/photo18.jpg',
            '/storage/images/photo19.jpg',
            '/storage/images/photo20.jpg',
            '/storage/images/photo22.jpg',
            '/storage/images/photo23.jpg',
            '/storage/images/photo24.jpg',
            '/storage/images/photo25.jpg',
            '/storage/images/photo26.jpg',
            '/storage/images/photo27.jpg',
            '/storage/images/photo29.jpg',
            '/storage/images/photo30.jpg',
        ];

        $posts = \App\Models\ImagePost::all();

        foreach($posts as $post) {
            $n = random_int(0, 25);
            Image::create([
                'path' => $images[$n],
                'imageable_type' => 'App\Models\ImagePost',
                'imageable_id' => $post->id
            ]);
        }
    }
}
