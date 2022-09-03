<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LocationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Location::factory()->create([
            'country' => 'Greece',
            'city' => 'Athens',
            'country_city' => 'Greece Athens',
            'city_country' => 'Athens Greece',
        ]);
        \App\Models\Location::factory()->create([
            'country' => 'Greece',
            'city' => 'Thesaloniki',
            'country_city' => 'Greece Thesaloniki',
            'city_country' => 'Thesaloniki Greece'
        ]);
        \App\Models\Location::factory()->create([
            'country' => 'Greece',
            'city' => 'Patra',
            'country_city' => 'Greece Patra',
            'city_country' => 'Patra Greece',
        ]);
        \App\Models\Location::factory()->create([
            'country' => 'Greece',
            'city' => 'Larisa',
            'country_city' => 'Greece Larisa',
            'city_country' => 'Larisa Greece'
        ]);
        $u = $this->command->ask('5 locations created. How many random locatios to create?', 5);
        \App\Models\Location::factory($u)->create();
    }
}
