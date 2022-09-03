<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Location>
 */
class LocationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $country = $this->faker->country(); 
        $city = $this->faker->city();

        return [
            'country' => $country,
            'city' => $city,
            'country_city' => $country . ' ' . $city,
            'city_country' => $city . ' ' . $country
        ];
    }
}
