<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class EtaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $etas = [

            ['25-35', 1],
            ['>35', 2],

        ];

        foreach($etas as $eta){
            DB::table('eta')->insert([
            'range' => $eta[0],
            'trip_id'=> $eta[1],
            
            ]);
        }
    }
}
