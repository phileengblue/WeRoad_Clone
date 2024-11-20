<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Itinerarytrip;
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
            LaratrustSeeder::class,
            RoleUserSeeder::class,
            ItinerarySeeder::class,
            FileSeeder::class,
            UserSeeder::class,
            TripSeeder::class,
            TypeSeeder::class,
            EtaSeeder::class,
            ItineraryTripSeeder::class,
            TripTypeSeeder::class,
            ReviewSeeder::class,
            PeriodsSeeder::class,
            MonthSeeder::class,
            ImageSeeder::class,
            ImageTripSeeder::class,
            DescriptionSeeder::class
        ]);
    }
    }

