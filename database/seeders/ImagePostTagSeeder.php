<?php

namespace Database\Seeders;

use App\Models\ImagePost;
use App\Models\Tag;
use Illuminate\Database\Seeder;

class ImagePostTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = Tag::all();
        $posts = ImagePost::all();

        $minTagPerPost = $this->command->ask('How many minimum tags to insert per post?', 0);
        $maxTagPerPost = $this->command->ask('How many maximum tags to insert per post?', 5);
        
        foreach($posts as $post) {
            $tagPerPost = random_int($minTagPerPost, $maxTagPerPost);
            $tags = Tag::inRandomOrder()->take($tagPerPost)->get()->pluck('id');
            $post->tags()->attach($tags);
        }
    }
}
