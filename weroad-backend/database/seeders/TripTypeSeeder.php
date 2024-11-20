<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use function Ramsey\Uuid\v1;

class TripTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $TripTypes = [

            [1,1],
            [1,4],
            [7,2],
            [6,3],
            [6,5],
            [1,6],
            [2,7],
            [3,8],
            [4,9],
            [1,10],
            [2,11],
            [3,12],
            [4,13],
            [1,14],
            [2,15],
            [3,16],
            [4,17],
            [5,18],
            [6,19],
            [1,20],
            [2,21],
            [3,22],
            [4,23],
            [5,24],
            [6,25],
            [1,26],
            [2,27],
            [3,28],
            [4,29],
            [5,30],
            [6,31],
            [1,32],
            [2,33],
            [1,34],
            [3,35],
            [1,36],
            [4,37],
            [1,38],
            [4,39],
            [1,40],
            [1,41],
            [1,42],
            [2,43],
            [1,44],
            [4,45],
            [1,46],
            [5,47],
            [1,48],
            [6,49],
            [1,50],
            [1,51],
            [2,52],
            [1,53],
            [1,54],
            [2,55],
            [1,56],
            [1,57],
            [1,58],
            [1,59],
            [1,60],

        ];

        foreach($TripTypes as $TripType){
            DB::table('triptypes')->insert([
            'type_id' => $TripType[0],
            'trip_id'=> $TripType[1],
            
            ]);
        }
    }
}
