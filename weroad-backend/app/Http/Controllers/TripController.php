<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Trip;
use App\Models\User;
use App\Models\Image;
use App\Models\Reservation;
use Illuminate\Http\Request;
use App\Jobs\TripsPeriodUpdate;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\FileController;
use App\Http\Controllers\DescriptionController;

class TripController extends Controller
{
    public function index()
    {
        // Recupera tutti i viaggi

        $trips = Trip::where('expired', false)->get();
    
        // Crea un array per memorizzare i risultati con i dati dell'immagine

        $tripData = $trips->map(function ($trip) {

            // Inizializza l'array per memorizzare i dati del viaggio e dell'immagine

            $tripInfo = $trip->toArray();
    
            // Trova i dettagli del file immagine associato al viaggio, se presente

            $fileData = null;

            if ($trip->filestorage_id) {

                $fileStorage = app(FileController::class)->getFileDataById($trip->filestorage_id);

                if ($fileStorage->getStatusCode() == 200) {

                    $fileData = $fileStorage->getData()->file;

                }

            }
    
            // Aggiungi i dati dell'immagine ai dati del viaggio

            $tripInfo['image'] = $fileData;
    
            return $tripInfo;

        });
    
        return response()->json($tripData);
    }

 

    public function show($id)
    {
        // Trova il viaggio con le immagini collegate
        $trip = Trip::with('images', 'description')->findOrFail($id);

        //Generazione URL
        $trip->images = $trip->images->map(function ($image) {
            $image->url = asset('storage/' . $image->path);
            return $image;
        });

        return response()->json([
            'trip' => $trip,
        ]);
    }




    public function TripCreate(Request $request)
    {
        $user  = Auth::user();

        // Validazione dei dati in ingresso
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'start_date' => 'required|date|date_format:Y-m-d',
            'end_date' => 'required|date|date_format:Y-m-d|after_or_equal:start_date',
            'status' => 'nullable|string',
            'max_slots' => 'required|integer|min:1',
            'min_slots' => 'required|integer|min:1|max:' . $request->input('max_slots'),
            'price' => 'required|numeric|min:0',
            'duration' => 'required|numeric',
            'file_img' => 'nullable|file|mimes:jpg,jpeg,png|max:2048', // Valida il file immagine se presente
            'images.*' => 'nullable|file|mimes:jpg,jpeg,png,gif|max:2048', // Validazione per più immagini
            'type_id' => 'nullable|integer|min:1',
        ]);

        $filestorage = FileController::storeFile($request, 'image/trip', 'file_img', 'trip_img');
        $filestorage_id = 1;
 
        if($filestorage != null){
            $filestorage_id = $filestorage->id;
        }

        
        //$startDate = Carbon::createFromFormat('d-m-Y', $request['start_date'])->format('Y-m-d');
       // $endDate = Carbon::createFromFormat('d-m-Y', $request['end_date'])->format('Y-m-d');

        if($user->HasRole('administrator') || $user->hasRole('organizer'))
        {
            $trip = Trip::create([
                'title' => $validatedData['title'],
                'start_date' => $validatedData['start_date'],
                'end_date' => $validatedData['end_date'],
                'status' => $validatedData['status'],
                'max_slots' => $validatedData['max_slots'],
                'min_slots' => $validatedData['min_slots'],
                'price' => $validatedData['price'],
                'duration' => $validatedData['duration'],
                'user_id' => $user->id,
                'filestorage_id' => $filestorage_id,
                //'type_id' => $validatedData['type_id'],
            ]);


            $folder = 'image/trip';

            // Carica le immagini
            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $file) {
                    $fileName = time() . '_' . $file->getClientOriginalName();
                    $filePath = $file->storeAs($folder, $fileName, 'public');

                    // Crea un record in images
                    $image = Image::create([
                        'path' => $filePath,
                        'name' => $fileName,
                        'extension' => $file->getClientOriginalExtension(),
                    ]);

                    // Collega l'immagine al viaggio tramite la tabella pivot
                    $trip->images()->attach($image->id);
                }
            }
 
 
            $descriptions = app(DescriptionController::class)->DescriptionCreate($request, $trip->id);

            return response()->json([
                'Trip' => $trip->load('images'),
                'Filestorage' => $filestorage,
                'Descriptions' => $descriptions,
                'message' => 'Viaggio creato con successo',
            ]);
        }
        else{

            return response()->json([
                'message' => 'Errore: Non disponi dei permessi per creare un viaggio'
            ]);
        }
    }

    public function TripUpdate(Request $request, $id){
        $trip = Trip::findOrFail($id);
        $user = Auth::user();
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'start_date' => 'required|date|date_format:Y-m-d',
            'end_date' => 'required|date|date_format:Y-m-d|after_or_equal:start_date',
            'status' => 'nullable|string',
            'max_slots' => 'required|integer|min:1',
            'min_slots' => 'required|integer|min:1|max:' . $request->input('max_slots'),
            'price' => 'required|numeric|min:0',
            'duration' => 'required|numeric',
            'file_img' => 'nullable|file|mimes:jpg,jpeg,png|max:2048', // Valida il file immagine se presente
            'type_id' => 'nullable|integer|min:1',
        ]);

        $filestorage = FileController::storeFile($request, 'image/trip', 'file_img', 'trip_img');
        $descriptions = app(DescriptionController::class)->DescriptionCreate($request, $trip->id);
        //$startDate = Carbon::createFromFormat('d-m-Y', $request['start_date'])->format('Y-m-d');
        //$endDate = Carbon::createFromFormat('d-m-Y', $request['end_date'])->format('Y-m-d');
        if($user->HasRole('administrator'))
        {
            if(isset($validatedData['file_img']))
            {
            
                $trip->update([
                    'title'=>  $validatedData['title'],
                    'start_date'=> $validatedData['start_date'],
                    'end_date'=> $validatedData['end_date'],
                    'status'=> $validatedData['status'],
                    'max_slots'=> $validatedData['max_slots'],
                    'min_slots'=> $validatedData['min_slots'],
                    'price'=> $validatedData['price'],
                    'duration' => $validatedData['required'],
                    'filestorage_id'=> $filestorage->id,
                   // 'type_id' => $validatedData['type_id'],
                ]);
            } else {
                $trip->update([
                    'title'=>  $validatedData['title'],
                    'start_date'=> $validatedData['start_date'],
                    'end_date'=> $validatedData['end_date'],
                    'status'=> $validatedData['status'],
                    'max_slots'=> $validatedData['max_slots'],
                    'min_slots'=> $validatedData['min_slots'],
                    'price'=> $validatedData['price'],
                    'duration' => $validatedData['required'],
                    //'type_id' => $validatedData['type_id'],
                ]);
            }

            return response()->json([
                'Trip' => $trip,
                'Descriptions'=>$descriptions,
                'message' => 'Viaggio modificato con successo',
            ]);
        }
        else{
            

         if($user->HasRole('organizer') && $trip->user_id == $user->id)
       {
        if(isset($validatedData['file_img']))
        {
        
            $trip->update([
                    'title'=>  $validatedData['title'],
                    'start_date'=> $validatedData['start_date'],
                    'end_date'=> $validatedData['end_date'],
                    'status'=> $validatedData['status'],
                    'max_slots'=> $validatedData['max_slots'],
                    'min_slots'=> $validatedData['min_slots'],
                    'price'=> $validatedData['price'],
                    'duration' => $validatedData['required'],
                    'filestorage_id'=> $filestorage->id,
                    //'type_id' => $validatedData['type_id'],
            ]);
        }else{
            $trip->update([
                    'title'=>  $validatedData['title'],
                    'start_date'=> $validatedData['start_date'],
                    'end_date'=> $validatedData['end_date'],
                    'status'=> $validatedData['status'],
                    'max_slots'=> $validatedData['max_slots'],
                    'min_slots'=> $validatedData['min_slots'],
                    'price'=> $validatedData['price'],
                    'duration' => $validatedData['required'],
                   // 'type_id' => $validatedData['type_id'],
            ]);
        }

            return response()->json([
                'Trip' => $trip,
                'Description'=>$trip,
                'message' => 'Viaggio modificato con successo',
            ]);
        }
        else{
            return response()->json([
                
                'message' => 'Non è stato possibile modificare il viaggio',
            ]);
        }
        }
       
    } 

    public function destroy($id)
    {
        $user = Auth::user();
        $trip = Trip::findOrFail($id);
        if($user->HasRole('administrator'))
        {
            $trip->delete();

            return response()->json(['message' => 'Viaggio cancellato con successo']);
        }
       
        else{
            if($user->HasRole('organizer') && $trip->user_id == $user->id)
            {
                $trip->delete();

                return response()->json(['message' => 'Viaggio cancellato con successo']);
            }

            else{

                return response()->json(['message' => 'Non hai le autorizzazioni per eliminare questo viaggio']);

            }
        }


    }
} 
