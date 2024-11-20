<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ItinerarySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $itineraries = [

           

            ["Europa",null], //1
            ["Asia",null], //2
            ["Sud Est Asiatico",null], //3
            ["Medio Oriente",null], //4
            ["Nord Europa",null], //5
            ["Africa",null], //6
            ["Nord America",null], //7
            ["Centro America",null], //8
            ["Sud America",null], //9
            ["Oceania",null], //10

            ["Spagna",1], //11
            ["Portogallo",1], //12
            ["Francia",1], //13
            ["Belgio",1], //14
            ["Paesi Bassi",1], //15
            ["Italia",1], //16
            ["Grecia",1], //17
            ["Balcani",1], //18
            ["Europa dell'est",1], //19
            ["Giappone",2], //20
            ["India",2], //21
            ["Nepal",2], //22
            ["Sri Lanka",2], //23
            ["Uzbekistan",2], //24
            ["Corea del Sud",2], //25
            ["Cina",2], //26
            ["Maldive",2], //27
            ["Mongolia",2], //28
            ["Indonesia",3], //29
            ["Thailandia",3], //30
            ["Vietnam",3], //31
            ["Malesia e Singapore",3], //32
            ["Filippine",3], //33
            ["Laos e Cambogia",3], //34
            ["Turchia",4], //35
            ["Giordania",4], //36
            ["Emirati Arabi",4], //37
            ["Oman",4], //38
            ["Islanda",5], //39
            ["Norvegia",5], //40
            ["Finlandia",5], //41
            ["Danimarca",5], //42
            ["Regno unito e Irlanda",5], //43
            ["Germania, Austria e Svizzera",5], //44
            ["Svezia",5], //45
            ["Marocco",6], //46
            ["Egitto",6], //47
            ["Tanzania",6], //48
            ["Kenya",6], //49
            ["Namibia",6], //50
            ["Sudafrica",6], //51
            ["Stati Uniti d'America",7], //52
            ["Canada",7], //53
            ["Cuba",8], //54
            ["Messico",8], //55
            ["Costa Rica",8], //56
            ["Rep.Dominicana",8], //57
            ["Panama",8], //58
            ["Perù",9], //59
            ["Brasile",9], //60
            ["Colombia",9], //61
            ["Argentina",9], //62
            ["Cile",9], //63
            ["Ecuador",9], //64
            ["Bolivia",9], //65
            ["Australia",10], //66
            ["Nuova Zelanda",10], //67
            ["Arabia Saudita", 2], //68
            ["Armenia",2], //69
            ["Azerbaigian",2], //70
            ["Bahrein",2], //71
            ["Bhutan",2], //72
            ["Georgia",2], //73
            ["Kazakistan",2], //74
            ["Kirghizistan",2], //75
            ["Qatar",2], //76
            ["Taiwan",2], //77
            ["Turkmenistan",2], //78
            ["Albania",1],
            ["Bosnia ed Erzegovina", 1],
            ["Bulgaria",1],
            ["Cipro", 1],
            ["Croazia", 1],
            ["Estonia",1],
            ["Fær Øer",1],
            ["Lituania",1],
            ["Lussenburgo",1],
            ["Macedonia del Nord",1],
            ["Malta",1],
            ["Moldavia",1],
            ["Montenegro",1],
            ["Polonia", 1],
            ["Rep. Ceca",1],
            ["Romania", 1],
            ["Serbia",1],
            ["Slovacchia",1],
            ["Slovenia",1],
            ["Svalbard e Jan Mayen",1],
            ["Ungheria",1],
            ["Antigua e Barbuda",7],
            ["Aruba",7],
            ["Belize",7],
            ["El Salvador",7],
            ["Giamaica",7],
            ["Groenlandia",7],
            ["Guadalupa",7],
            ["Guatemala",7],
            ["Honduras",7],
            ["Martinica",7],
            ["Nicaragua",7],
            ["Porto Rico",7],
            ["Trinidad e Tobago",7],
            ["Uruguay",7],
            ["Algeria",6],
            ["Botswana",6],
            ["Capo Verde",6],
            ["Gambia",6],
            ["Madagascar",6],
            ["Mauritius",6],
            ["Mozambico",6],
            ["Riunione",6],
            ["Ruanda",6],
            ["Senegal",6],
            ["Seychelles",6],
            ["São Tomé e Príncipe",6],
            ["Tunisia",6],
            ["Uganda",6],
            ["Zambia",6],
            ["Zimbabwe",6],
            ["Antartide",1],




            /*["Andalusia Express",11],
            ["Portogallo Express",12],
            ["Paesi Baschi Express",11],
            ["Amsterdam Express",15],
            ["Borgogna Express",13],
            ["Francia Express",13],
            ["Giappone Express",20],
            ["India 360",21],
            ["Nepal Trekking",22],
            ["Sri Lanka 360",23],
            ["Uzbekistan Express",24],
            ["Corea del Sud 360",25],
            ["Taiwan 360",26],
            ["Maldive Beach Life",27],
            ["Bali Express",28],
            ["Thailandia Beach Life Winter",29],
            ["Vietnam 360",30],
            ["Malesia Expedition",31],
            ["Filippine: Alla scoperta di Palawan",32],
            ["Laos Expedition",33],
            ["Istanbul Express",34],
            ["Giordania 360",35],
            ["Dubai Express",36],
            ["Oman 360",37],
            ["Islanda Van Life Edition",38],
            ["Norvegia 360",39],
            ["Lapponia Finlandese",40],
            ["Copenaghen Express",41],
            ["Galles del Nord Express",42],
            ["Londra Express",42],
            ["Berlino Express",43],
            ["Amburgo Express",43],
            ["Lapponia Svedese",44],
            ["Marocco Express",45],
            ["Cairo Express",46],
            ["Zanzibar 360",47],
            ["Kenya Safari",48],
            ["Namibia 360",49],
            ["Sudafrica Safari",50],
            ["New York 360",51],
            ["Canada Orientale 360",52],
            ["Cuba Beach Life",53],
            ["Messico Beach Life",54],
            ["Costa Rica 360",55],
            ["Repubblica Dominicana 360",56],
            ["Panama 360",57],
            ["Perù Expedition",58],
            ["Rio de Janeiro Surf Week",59],
            ["Colombia Beach Life",60],
            ["Argentina 360",61],
            ["Patagonia 360",62],
            ["Galàpagos 360",63],
            ["Australia on the road",64],
            ["Nuova Zelanda",65],*/

        ]; 

        foreach($itineraries as $itinerary){
            DB::table('itineraries')->insert([
            'name' => $itinerary[0],
            'parent_id'=> $itinerary[1],
            
            ]);
        }
    }
}
