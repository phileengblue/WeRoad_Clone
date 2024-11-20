<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TripSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $trips = [

            ['Marocco 360°: Marrakech, Fez, Rabat e il deserto', '2024-11-9', '2024-11-16','on request','7','20','849', '8' ,false,1,1],//1
            ['Giappone 360°: alla scoperta di Tokyo, Kyoto, Hiroshima e Osaka', '2024-11-14', '2024-11-24','confirmed','5','15','1709', '11',false,2,1],//2
            ['Madeira: L^isola dell^eterna primavera', '2024-09-20', '2024-09-29','planned', '6', '20', '2499', '9',false,3,1 ],
            ['Campania Express', '2024-10-03', '2024-10-17','sold out', '4', '12', '399','14',false,4,1],
            ['Safari Estivo', '2024-11-21', '2024-12-01', 'planned', '3', '10', '899', '11',false,5,1],
            ['Spagna Express', '2024-12-21', '2025-12-30', 'confirmed', '6', '17', '1999', '5',false,6,1],
            ['Portogallo Express', '2024-12-26', '2024-12-29', 'planned', '6', '17', '1299', '5',false,6,1],
            ['Francia Express', '2024-12-27', '2024-12-29', 'planned', '6', '17', '1999', '5',false,6,1],
            ['Belgio Express', '2024-12-24', '2024-12-31', 'confirmed', '6', '17', '1299', '5',false,6,1],
            ['Paesi Bassi Express', '2024-12-22', '2025-01-30', 'confirmed', '6', '17', '1299', '5',false,6,1],
            ['Italia Express', '2024-10-25', '2024-11-02', 'sold out', '6', '17', '1999', '5',false,6,1],
            ['Grecia Express', '2024-10-26', '2024-11-03', 'confirmed', '6', '17', '1299', '5',false,6,1],
            ['Balcani Express', '2024-10-27', '2025-11-01', 'on request', '6', '17', '1999', '5',false,6,1],
            ["Europa dell'est Express", '2024-12-13', '2024-12-22', 'confirmed', '6', '17', '799', '5',false,5,1],
            ['Giappone Express', '2024-12-14', '2024-12-23', 'confirmed', '6', '17', '799', '5',false,5,1],
            ['India Express', '2024-12-15', '2024-12-24', 'planned', '6', '17', '1999', '5',false,5,1],
            ['Nepal Express', '2024-12-16', '2024-12-25', 'confirmed', '6', '17', '799', '5',false,5,1],
            ['Sri Lanka Express', '2025-04-16', '2025-04-19', 'sold out', '6', '17', '1299', '5',false,5,1],
            ['Uzbekistan Express', '2025-04-16', '2025-04-20', 'confirmed', '6', '17', '1999', '5',false,5,1],
            ['Corea del Sud Express', '2025-04-17', '2025-04-20', 'confirmed', '6', '17', '1999', '5',false,5,1],
            ['Cina Express', '2025-04-17', '2025-04-19', 'planned', '6', '17', '799', '5',false,5,1],
            ['Maldive Express', '2025-04-19', '2025-05-01', 'on request', '6', '17', '1299', '5',false,4,1],
            ['Mongolia Express', '2025-04-20', '2025-05-02', 'confirmed', '6', '17', '1299', '5',false,4,1],
            ['Indonesia Express', '2025-04-21', '2025-05-03', 'sold out', '6', '17', '899', '5',false,4,1],
            ['Thailandia Express', '2025-04-22', '2025-05-04', 'confirmed', '6', '17', '1999', '5',false,4,1],
            ['Vietnam Express', '2025-05-29', '2025-06-02', 'confirmed', '6', '17', '799', '5',false,4,1],
            ['Malesia e Singapore Express', '2025-05-29', '2025-06-05', 'on request', '6', '17', '899', '5',false,4,1],
            ['Filippine Express', '2025-05-29', '2025-06-04', 'confirmed', '6', '17', '799', '5',false,4,1],
            ['Laos e Cambogia Express', '2025-05-30', '2025-06-05', 'confirmed', '6', '17', '1999', '6',false,4,1],
            ['Turchia Express', '2025-05-29', '2025-06-06', 'sold out', '6', '17', '1999', '7',false,2,1],
            ['Giordania Express', '2024-11-11', '2024-11-16', 'confirmed', '6', '17', '1999', '5',false,2,1],
            ['Emirati Arabi Express', '2024-11-11', '2024-11-16', 'on request', '6', '17', '899', '5',false,2,1],
            ['Oman Express', '2024-11-11', '2024-11-16', 'confirmed', '6', '17', '899', '5',false,2,1],
            ['Islanda Express', '2024-11-11', '2024-11-16', 'planned', '6', '17', '1299', '5',false,2,1],
            ['Norvegia Express', '2024-11-11', '2024-11-16', 'sold out', '6', '17', '1299', '5',false,2,1],
            ['Finlandia Express', '2024-11-11', '2024-11-16', 'planned', '6', '17', '1999', '5',false,1,1],
            ['Danimarca Express', '2024-11-11', '2024-11-16', 'confirmed', '6', '17', '1999', '5',false,1,1],
            ['Regno Unito e Irlanda Express', '2024-11-11', '2024-11-16', 'confirmed', '6', '17', '899', '5',false,1,1],
            ['Germania, Austria e Svizzera Express', '2024-11-11', '2024-11-16', 'confirmed', '6', '17', '899', '5',false,1,1],
            ['Svezia Express', '2024-11-11', '2024-11-16', 'sold out', '6', '17', '1999', '5',false,1,1],
            ['Marocco Express', '2024-11-11', '2024-11-16', 'on request', '6', '17', '899', '5',false,1,1],
            ['Egitto Express', '2024-11-11', '2024-11-16', 'confirmed', '6', '17', '899', '5',false,1,1],
            ['Tanzania Express', '2024-11-11', '2024-11-16', 'confirmed', '6', '17', '1999', '5',false,6,1],
            ['Kenya Express', '2024-11-11', '2024-11-16', 'sold out', '6', '17', '2499', '5',false,6,1],
            ['Namibia Express', '2024-11-11', '2024-11-16', 'planned', '6', '17', '2399', '5',false,6,1],
            ['Sudafrica Express', '2024-11-11', '2024-11-16', 'confirmed', '6', '17', '2299', '5',false,6,1],
            ["Stati Uniti d'America Express", '2024-11-11', '2024-11-16', 'confirmed', '6', '17', '2199', '5',false,6,1],
            ['Canada Express', '2024-11-11', '2024-11-16', 'planned', '6', '17', '2099', '5',false,6,1],
            ['Cuba Express', '2024-11-11', '2024-11-16', 'sold out', '6', '17', '1899', '5',false,6,1],
            ['Messico Express', '2024-11-11', '2024-11-16', 'confirmed', '6', '17', '1999', '5',false,5,1],
            ['Costa Rica Express', '2024-11-11', '2024-11-16', 'planned', '6', '17', '1799', '5',false,5,1],
            ['Rep.Dominicana Express', '2024-11-11', '2024-11-16', 'on request', '6', '17', '1699', '5',false,5,1],
            ['Panama Express', '2024-11-11', '2024-11-16', 'sold out', '6', '17', '1599', '5',false,5,1],
            ['Perù Express', '2024-11-11', '2024-11-16', 'confirmed', '6', '17', '1499', '5',false,5,1],
            ['Brasile Express', '2024-11-11', '2024-11-16', 'on request', '6', '17', '1399', '5',false,4,1],
            ['Colombia Express', '2024-11-11', '2024-11-16', 'confirmed', '6', '17', '1299', '5',false,4,1],
            ['Argentina Express', '2024-11-11', '2024-11-16', 'sold out', '6', '17', '1199', '5',false,4,1],
            ['Cile Express', '2024-11-11', '2024-11-16', 'sold out', '6', '17', '999', '5',false,4,1],
            ['Ecuador Express', '2024-11-11', '2024-11-16', 'confirmed', '6', '17', '899', '5',false,4,1],
            ['Australia Express', '2024-11-11', '2024-11-16', 'on request', '6', '17', '799', '5',false,4,1],
            ['Nuova Zelanda Express', '2024-11-11', '2024-11-16', 'confirmed', '6', '17', '699', '5',false,4,1],
            ['Bolivia Express', '2024-11-11', '2024-11-16', 'confirmed', '6', '17', '699', '5',false,4,1],
            ['Test Calendario', '2024-12-13', '2024-12-13','on request','7','20','599', '8' ,false,1,1],
            


        ];

        foreach($trips as $trip){
            DB::table('trips')->insert([
			'title' => $trip[0],
            'start_date' => $trip[1],
            'end_date' => $trip[2],
            'status' => $trip[3],
            'min_slots' => $trip[4],
            'max_slots' => $trip[5],
            'price' => $trip[6],
            'duration' => $trip[7],
            'expired' => $trip[8],
            'filestorage_id' => $trip[9],
            'user_id' => $trip[10],

           
            ]);
    }
}
}