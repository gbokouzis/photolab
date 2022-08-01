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
            '/storage/images/UrU7i8ZBSTyMiA3ZwEqatHbkil5tpa151rhnjHu6.jpg',
            '/storage/images/vEfIDVclPKkVKmIlqU9pKGDOaDx0qym0sYB0VuAw.jpg',
            '/storage/images/yyZk14GOdYPeVnYJXQD6raOXjS2tK6Yq4JycFSWI.jpg',
            '/storage/images/ixO0YB8kjAf6su1UMn8UCc1rteNIPqApkhhyeWud.jpg',
            '/storage/images/4qsO9jV7kw82msXePMYu88xQjdGKYEZLWCd0D7LH.jpg',
            '/storage/images/DanKiPmQsi1ySSYYQPpRxErgdwHRzjMcV1cCYSn5.jpg'
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
