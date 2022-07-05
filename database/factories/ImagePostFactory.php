<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ImagePost>
 */
class ImagePostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    
    public function definition()
    {
        $users = \App\Models\User::all();       
        return [
            'description' => $this->faker->text($maxNbChars = 50),
            'camera' => $this->faker->text($maxNbChars = 10),
            'user_id' => $users->random()->id,
            'created_at' => $this->faker->dateTimeBetween('-3 months'),
        ];
    }
}
