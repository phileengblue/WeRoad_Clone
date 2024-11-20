<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users=
        [
            [ "Manuel","Bracciolani","22","male","2001/09/03","3921756567","manuelbracciolani391@gmail.com","Test12!", 7],
            [ 'Antonio','Grattieri','20','male','1998/04/03', '3457689221', 'antoniograttieri@gmail.com', 'User1!', 7],
            [ 'Francesca','Pattani','30','male','1988/09/29', '3472145663', 'francescapattani@gmail.com', 'User2!', 8],

        ];


        foreach($users as $user){
            DB::table('users')->insert([
			'firstname' => $user[0],
            'lastname' => $user[1],
            'age' => $user[2],
            'gender' => $user[3],
            'birth_date' => $user[4],
            'phone_number' => $user[5],
            'email' => $user[6],
            'password' => Hash::make($user[7]),
            'filestorage_id' => $user[8]
            
            ]);
        }
    }

    }

