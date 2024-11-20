<?php

namespace App\Http\Controllers;

use App\Models\Description;
use App\Models\Trip;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class DescriptionController extends Controller
{
    

    public function show($id)
    {
        $descriptions = Description::findOrFail($id);
        return response()->json($descriptions);
    }

    public function DescriptionCreate(Request $request,$id)
    {
        $trip = Trip::findOrFail($id);
        $user  = Auth::user();
        $existingDescription = Description::where('trip_id', $trip->id)->first();

        if($user->HasRole('administrator') || $user->hasRole('organizer'))
        {
            if(!$existingDescription)
            {
           
            $descriptions = Description::create([

                'description_header' =>$request->description_header,
                'description1'=>$request->description1,
                'description2'=>$request->description2,
                'description3'=>$request->description3,
                'description4'=>$request->description4,
                'trip_id'=>$trip->id,

            ]);

            return response()->json([
                'descrizioni' => $descriptions,
                'message' => 'Descrizioni inserite con successo',
            ]);
            }
        }
        else{

            return response()->json([
                'message' => 'Errore: Non disponi dei permessi per inserire delle descrizioni'
            ]);
        }
    }

    public function DescriptionUpdate(Request $request, $id)
    {
        $trip = Trip::findOrFail($id);
        $user  = Auth::user();
        $existingDescription = Description::where('trip_id', $trip->id)->first();

        if($user->HasRole('administrator') || $user->hasRole('organizer'))
        {
            if($existingDescription)
            {
           
            $existingDescription->update([

                'description_header' =>$request->description_header,
                'description1'=>$request->description1,
                'description2'=>$request->description2,
                'description3'=>$request->description3,
                'description4'=>$request->description4,
                'trip_id'=>$trip->id,

            ]);

            return response()->json([
                'descrizioni' => $existingDescription,
                'message' => 'Descrizioni modificate con successo',
            ]);
            }
        }
        else{

            return response()->json([
                'message' => 'Errore: Non disponi dei permessi per modificare le descrizioni'
            ]);
        }
    }

    public function deleteDescription($id)
    {
        $user = Auth::user();
        $trip = Trip::findOrFail($id);
        $existingDescription = Description::where('trip_id', $trip->id)->first();
        if($existingDescription){
            $existingDescription->delete();
 
            return response()->json(['message' => 'Descrizione eliminata con successo.']);
        } else return response()->json(['message' => 'Descrizione inesistente']);
    }

}
