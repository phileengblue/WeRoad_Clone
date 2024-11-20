<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles=
        [
            ["1" , "1", "App\Models\User"],
            ['2','2', 'App\Models\User'],
            ['3', '3', 'App\Models\User']
        ];


        foreach($roles as $role_user){
            DB::table('role_user')->insert([
			'role_id' => $role_user[0],
            'user_id'=> $role_user[1],
            'user_type'=> $role_user[2],
            
            
            ]);
        }
    }
}
