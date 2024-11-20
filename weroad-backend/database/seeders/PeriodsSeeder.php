<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class PeriodsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $periods = [

            
                 ['Ponte del 1 novembre','2023-10-25','2023-11-03',false],
                //['Natale','2024-12-13','2024-12-26',false],
                 ['Capodanno','2024-12-20','2024-12-31',false],
                 ['Pasqua 2025','2025-04-16','2025-04-20',false],
                 ['Ponte del 25 Aprile 2025','2025-04-19','2025-05-04',false],
                 ['Ponte 2 Giugno 2025','2025-05-29','2025-06-08',false],
                 ['Natale 2023', '2023-12-13', '2023-12-26',false],
                 
            
            
        ];
        

        foreach($periods as $period){
            DB::table('periods')->insert([
            'name' => $period[0],
            'start_date'=> $period[1],
            'end_date'=> $period[2],
            'expired'=> $period[3],
            
            ]);
        }
    }
}
