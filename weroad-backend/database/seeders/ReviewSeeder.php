<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $reviews = [

            ['3','Bello',1,1],
            ['4','Fantastico', 1,2],
            ['5', 'Tutto perfetto', 1,3],
            ['4', 'Esperienza ottima',1,4],
            ['3', 'Esperienza discreta',1,5],
            ['1', 'Esperienza orribile',1,6],
            ['3','Bello',1,7],
            ['4','Fantastico', 1,8],
            ['5', 'Tutto perfetto', 1,9],
            ['4', 'Esperienza ottima',1,10],
            ['3', 'Esperienza discreta',1,11],
            ['1', 'Esperienza orribile',1,12],
            ['3','Bello',1,13],
            ['4','Fantastico', 1,14],
            ['5', 'Tutto perfetto', 1,15],
            ['4', 'Esperienza ottima',1,16],
            ['3', 'Esperienza discreta',1,17],
            ['1', 'Esperienza orribile',1,18],
            ['3','Bello',1,19],
            ['4','Fantastico', 1,20],
            ['5', 'Tutto perfetto', 1,21],
            ['4', 'Esperienza ottima',1,22],
            ['3', 'Esperienza discreta',1,23],
            ['1', 'Esperienza orribile',1,24],
            ['3','Bello',1,25],
            ['4','Fantastico', 1,26],
            ['5', 'Tutto perfetto', 1,27],
            ['4', 'Esperienza ottima',1,28],
            ['3', 'Esperienza discreta',1,29],
            ['1', 'Esperienza orribile',1,30],
            ['3','Bello',1,31],
            ['4','Fantastico', 1,32],
            ['5', 'Tutto perfetto', 1,33],
            ['4', 'Esperienza ottima',1,34],
            ['3', 'Esperienza discreta',1,35],
            ['1', 'Esperienza orribile',1,36],
            ['3','Bello',1,37],
            ['4','Fantastico', 1,38],
            ['5', 'Tutto perfetto', 1,39],
            ['4', 'Esperienza ottima',1,40],
            ['3', 'Esperienza discreta',1,41],
            ['1', 'Esperienza orribile',1,42],
            ['3','Bello',1,43],
            ['4','Fantastico', 1,44],
            ['5', 'Tutto perfetto', 1,45],
            ['4', 'Esperienza ottima',1,46],
            ['3', 'Esperienza discreta',1,47],
            ['1', 'Esperienza orribile',1,48],
            ['3','Bello',1,49],
            ['4','Fantastico', 1,50],
            ['5', 'Tutto perfetto', 1,51],
            ['4', 'Esperienza ottima',1,52],
            ['3', 'Esperienza discreta',1,53],
            ['1', 'Esperienza orribile',1,54],
            ['3','Bello',1,55],
            ['4','Fantastico', 1,56],
            ['5', 'Tutto perfetto', 1,57],
            ['4', 'Esperienza ottima',1,58],
            ['3', 'Esperienza discreta',1,59],
            ['1', 'Esperienza orribile',1,60],
        ];

        foreach($reviews as $review){
            DB::table('reviews')->insert([
			'vote' => $review[0],
            'description'=> $review[1],
            'user_id'=> $review[2],
            'trip_id'=> $review[3],
            
            
            ]);
        }
    }
}
