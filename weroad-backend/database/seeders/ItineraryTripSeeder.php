<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use function Ramsey\Uuid\v1;

class ItineraryTripSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $itineryTrips = [

            [1, 1],
            [22,2],
            [12,3],
            [16,4],
            [48,5],
            [11,6],
            [12,7],
            [13,8],
            [14,9],
            [15,10],
            [16,11],
            [17,12],
            [18,13],
            [19,14],
            [20,15],
            [21,16],
            [22,17],
            [23,18],
            [24,19],
            [25,20],
            [26,21],
            [27,22],
            [28,23],
            [29,24],
            [30,25],
            [31,26],
            [32,27],
            [33,28],
            [34,29],
            [35,30],
            [36,31],
            [37,32],
            [38,33],
            [39,34],
            [40,35],
            [41,36],
            [42,37],
            [43,38],
            [44,39],
            [45,40],
            [46,41],
            [47,42],
            [48,43],
            [49,44],
            [50,45],
            [51,46],
            [52,47],
            [53,48],
            [54,49],
            [55,50],
            [56,51],
            [57,52],
            [58,53],
            [59,54],
            [60,55],
            [61,56],
            [62,57],
            [63,58],
            [64,59],
            [65,62],
            [66,60],
            [67,61],
            
           

        ];

        foreach($itineryTrips as $itineraryTrip){
            DB::table('itinerarytrip')->insert([
            'itinerary_id' => $itineraryTrip[0],
            'trip_id'=> $itineraryTrip[1],
            
            ]);
        }
    }
}
