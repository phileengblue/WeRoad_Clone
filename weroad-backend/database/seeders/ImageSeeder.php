<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $images = 
        [
            //trip marocco
            ['image/trip/trip-marocco-image1.jpeg', 'trip-marocco-image1', 'jpeg'],//1
            ['image/trip/trip-marocco-image2.jpg', 'trip-marocco-image2', 'jpg'],//2
            ['image/trip/trip-marocco-image3.jpg', 'trip-marocco-image3', 'jpg'],//3
            ['image/trip/trip-marocco-image4.jpeg', 'trip-marocco-image4', 'jpeg'],//4
            ['image/trip/trip-marocco-image5.jpeg', 'trip-marocco-image5', 'jpeg'],//5
            ['image/trip/trip-marocco-image6.jpeg', 'trip-marocco-image6', 'jpeg'],//6
            ['image/trip/trip-marocco-image7.jpeg', 'trip-marocco-image7', 'jpeg'],//7
            ['image/trip/trip-marocco-image8.jpeg', 'trip-marocco-image8', 'jpeg'],//8
            ['image/trip/trip-marocco-image9.jpeg', 'trip-marocco-image9', 'jpeg'],//9
            ['image/trip/trip-marocco-image10.jpeg', 'trip-marocco-image10', 'jpeg'],//10
            ['image/trip/trip-marocco-image11.jpeg', 'trip-marocco-image11', 'jpeg'],//11
            ['image/trip/trip-marocco-image12.jpeg', 'trip-marocco-image12', 'jpeg'],//12
            ['image/trip/trip-marocco-image13.jpeg', 'trip-marocco-image13', 'jpeg'],//13
            ['image/trip/trip-marocco-image14.jpeg', 'trip-marocco-image14', 'jpeg'],//14
            ['image/trip/trip-marocco-image15.jpeg', 'trip-marocco-image15', 'jpeg'],//15
            ['image/trip/trip-marocco-main-image.jpeg', 'trip-marocco-main-image', 'jpeg'],//16

            //trip giappone
            ['image/trip/trip-giappone-image1.jpg', 'trip-giappone-image1', 'jpg'],//17
            ['image/trip/trip-giappone-image2.jpg', 'trip-giappone-image2', 'jpg'],//18
            ['image/trip/trip-giappone-image3.jpg', 'trip-giappone-image3', 'jpg'],//19
            ['image/trip/trip-giappone-image4.jpg', 'trip-giappone-image4', 'jpg'],//20
            ['image/trip/trip-giappone-image5.jpeg', 'trip-giappone-image5', 'jpeg'],//21
            ['image/trip/trip-giappone-image6.jpg', 'trip-giappone-image6', 'jpg'],//22
            ['image/trip/trip-giappone-image7.jpg', 'trip-giappone-image7', 'jpg'],//23
            ['image/trip/trip-giappone-image8.jpg', 'trip-giappone-image8', 'jpg'],//24
            ['image/trip/trip-giappone-image9.jpg', 'trip-giappone-image9', 'jpg'],//25
            ['image/trip/trip-giappone-image10.jpg', 'trip-giappone-image10', 'jpg'],//26
            ['image/trip/trip-giappone-image11.jpeg', 'trip-giappone-image11', 'jpeg'],//27
            ['image/trip/trip-giappone-image12.jpeg', 'trip-giappone-image12', 'jpeg'],//28
            ['image/trip/trip-giappone-image13.jpg', 'trip-giappone-image13', 'jpg'],//29
            ['image/trip/trip-giappone-image14.jpg', 'trip-giappone-image14', 'jpg'],//30
            ['image/trip/trip-giappone-image15.jpg', 'trip-giappone-image15', 'jpg'],//31
            ['image/trip/trip-giappone-image16.jpg', 'trip-giappone-image16', 'jpg'],//32
            ['image/trip/trip-giappone-image17.jpg', 'trip-giappone-image17', 'jpg'],//33
            ['image/trip/trip-giappone-main-image.jpeg', 'trip-giappone-main-image', 'jpeg'],//34
        ];

        foreach ($images as $image) {
            DB::table('images')->insert([
                'path' => $image[0],
                'name'=> $image[1],
                'extension'=> $image[2],
            ]);
        }
    }
}
