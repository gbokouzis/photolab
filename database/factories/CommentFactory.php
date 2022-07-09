<?php

namespace Database\Factories;

use App\Models\ImagePost;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */

 // 'image_post_id' => ImagePost::factory(),

 class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $users = \App\Models\User::all(); 
        $posts = \App\Models\ImagePost::all();
        return [
            'content' => $this->faker->text,
            'user_id' => $users->random()->id,
            'image_post_id' => $posts->random()->id,
            'created_at' => $this->faker->dateTimeBetween('-1 months'),
        ];
    }
 
}
