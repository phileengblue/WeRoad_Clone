<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $files = [

            ['image/trip/trip-marocco.jpg', 'trip-marocco', 'jpg', 'trip_img'],//1
            ['image/trip/trip-giappone.jpg', 'trip-giappone', 'jpg', 'trip_img'],//2
            ['image/trip/Madeira.jpeg', 'Madeira', 'jpeg', 'trip_img'],//3
            ['image/trip/Amalfi.jpeg', 'Amalfi', 'jpeg', 'trip_img'],//4
            ['image/trip/Safari.jpg', 'Safari', 'jpg', 'trip_img'],//5
            ['image/trip/Siberia.jpg', 'Siberia', 'jpg', 'trip_img'],//6

            //Immagini di default per gli users
            ['image/user/DefaultUomo.png', "DefaultUomo", 'png', 'user_img'],//7
            ['image/user/DefaultDonna.png', "DefaultDonna", 'png', 'user_img'],//8
            ['image/user/DefaultOther.jpeg', "DefaultOther", 'jpeg', 'user_img'],//9

            //Immagini Header Mesi
            ['image/month/Gennaio.jpeg', 'Gennaio', 'jpeg', 'month_img'],//10
            ['image/month/Febbraio.jpeg', 'Febbraio', 'jpeg', 'month_img'],//11
            ['image/month/Marzo.jpeg', 'Marzo', 'jpeg', 'month_img'],//12
            ['image/month/Aprile.jpeg', 'Aprile', 'jpeg', 'month_img'],//13
            ['image/month/Maggio.jpg', 'Maggio', 'jpg', 'month_img'],//14
            ['image/month/Giugno.jpg', 'Giugno', 'jpg', 'month_img'],//15
            ['image/month/Luglio.jpeg', 'Luglio', 'jpeg', 'month_img'],//16
            ['image/month/Agosto.jpeg', 'Agosto', 'jpeg', 'month_img'],//17
            ['image/month/Settembre.jpg', 'Settembre', 'jpg', 'month_img'],//18
            ['image/month/Ottobre.jpeg', 'Ottobre', 'jpeg', 'month_img'],//19
            ['image/month/Novembre.jpg', 'Novembre', 'jpg', 'month_img'],//20
            ['image/month/Dicembre.jpg', 'Dicembre', 'jpg', 'month_img'],//21


        ];

        foreach($files as $file){
            DB::table('filestorage')->insert([
            'path' => $file[0],
            'name'=> $file[1],
            'extension'=> $file[2],
            'type'=>$file[3]
            
            ]);
        }
    }
}
