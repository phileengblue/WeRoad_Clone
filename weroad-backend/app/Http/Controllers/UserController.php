<?php

namespace App\Http\Controllers;
use App\Models\Itinerarytrip;
use App\Models\Reservation;
use Closure;
use Carbon\Carbon;
use App\Models\User;
use App\Models\Article;
use App\Models\Buyer_history;
use App\Models\FileStorage;
use App\Models\Review;
use App\Models\Itinerary;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpKernel\Attribute\Cache;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use App\Models\Trip;


use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {

        $users = User::all();
        return response()->json($users);
    }

    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    public function userRegistration(Request $request)
    {
        $existingEmail = User::where('email', $request->input('email'))->first();

        if ($existingEmail) {
            return response()->json(['error' => 'Email già in uso da un altro utente'], 200);
        }

        $validator = Validator::make($request->all(),[
            'password' =>[
                'required',
                'min:6',
                'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/',
            ],
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'birth_date' => 'required|date',
            'phone_number' => 'required|string',
            'gender' => 'required|string',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()->first()], 400);
            }
            
            $hashedPassword = Hash::make($request->input('password'));

            $filestorage = FileController::storeFile($request, 'image/user', 'file_img', 'user_img');
            $filestorage_id = 1;
     
            if($filestorage != null){
                $filestorage_id = $filestorage->id;
            }

            $user = User::create([
                'email' => $request->input('email'),
                'password' => $hashedPassword,
                'firstname' =>$request->input('firstname'),
                'lastname' => $request->input('lastname'),
                'age' => $request->input('age'),
                'birth_date' =>$request->input('birth_date'),
                'phone_number' =>$request->input('phone_number'),
                'gender' => $request->input('gender'),
                'filestorage_id' => $filestorage_id,
                
                ]);

                if ($user->gender == 'male' && $filestorage == null) {
                    $user->filestorage_id = 7; 
                    $user->save();
                } elseif ($user->gender == 'female' && $filestorage == null) {
                    $user->filestorage_id = 8; 
                    $user->save();
                }elseif ($user->gender == 'other' && $filestorage == null) {
                    $user->filestorage_id = 9;
                    $user->save();
                }


                $user->attachRole('user');

                return response()->json([
                    'user' => $user,
                    'message' => 'Utente registrato con successo',
                ], 200);
        
    } 

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $validatedData = $request->validate([
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'age' => 'nullable|numeric',
            'birth_date' => 'required|date|date_format:Y-m-d|',
            'phone_number' => 'required|string|max:255',
            'gender' => 'required|string|',
            'file_img' => 'nullable|file|mimes:jpg,jpeg,png|max:2048', // Valida il file immagine se presente
        ]);

        $filestorage = FileController::storeFile($request, 'image/user', 'file_img', 'user_img');
        if($user->HasRole('organizer'))
        {
        $user->update([
            'firstname' => $request->firstname,
            'lastname'=> $request->lastname,
            'age'=> $request->age,
            'birth_date'=> $request->birth_date,
            'phone_number'=> $request->phone_number,
            'gender'=> $request->gender,
            'filestorage_id'=> $filestorage->id
        ]);
    
        }
        else
        {
            $user->update([
                'firstname' => $request->firstname,
                'lastname'=> $request->lastname,
                'age'=> $request->age,
                'birth_date'=> $request->birth_date,
                'phone_number'=> $request->phone_number,
                'gender'=> $request->gender,
                
            ]);

        }
        return response()->json($user);
     }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return response()->json(['message' => 'Il tuo account è stato eliminato con successo']);
    }

    public function joinTrip($id)
    {

        $user  = Auth::user();
        $trip = Trip::findOrFail($id);

        if($user->HasRole('user'))
        {
            if(Reservation::where('user_id' ,$user->id)->first())
            {
                return response()->json(['message' => 'Utente già presente nel viaggio']);
            }
            else
            {
                if($trip->status != 'sold out')
                {
                    $reservation = Reservation::create([

                        'user_id' =>$user->id,
                        'trip_id' =>$trip->id,
                        
                    ]);

                    return response()->json([
                        'reservation' => $reservation,
                        'message' => 'Utente registrato al viaggio con successo'
                    ]);
                }
                else
                {
                    return response()->json(['message'=> 'Numero massimo di posti raggiunto']);
                }
            }
        }

    }

    public function CancelReservation(Request $request, $id)
    {
        
        $user  = Auth::user();
        $reservation = Reservation::findOrFail($id);

         if(Reservation::where('user_id' ,$user->id)->first())
        {
           $reservation->delete();

           return response()->json(['message '=> 'Prenotazione eliminata con successo']);
        }

    }
    
    public function review(Request $request, $id)
    {
        $user = Auth::user();
        $trip = Trip::findOrFail($id);

        $reservation = Reservation::where('user_id', $user->id)->where('trip_id', $trip->id)->first();
        $existingReview = Review::where('user_id', $user->id)->where('trip_id', $trip->id)->first();

        if($reservation)
        {
            
            if(!$existingReview)
            {
                
                $review = Review::create ([
                    'vote' => $request->vote,
                    'description' => $request->description,
                    'user_id' => $user->id,
                    'trip_id' => $trip->id,

                ]);
                return response()->json([
                ' review ' => $review,
                'message '=> 'Recensione creata con successo'
            ]);
            }
            else
            {
                
                return response()->json(['message '=> 'Recensione già presente']);
            }
        }
        else
        {
            return response()->json(['message '=> 'Utente non prenotato a questo viaggio']);
        }
    }

    public function getReview($id)
    {
        $review = Review::findOrFail($id);
        return response()->json($review);
    }

    public function updateReview(Request $request,$id)
    {
        $user = Auth::user();
        $trip = Trip::findOrFail($id);

        $existingReview = Review::where('user_id', $user->id)->where('trip_id', $trip->id)->first();

        if($existingReview)
        {
            $existingReview->update([
                    'vote' => $request->vote,
                    'description' => $request->description,
                    'user_id' => $user->id,
                    'trip_id' => $trip->id,
            ]);

            return response()->json([
                ' review ' => $existingReview,
                'message '=> 'Recensione modificata con successo'
            ]);
        }


    }

    public function deleteReview($id)
    {
        $user = Auth::user();
        $trip = Trip::findOrFail($id);
        $existingReview = Review::where('trip_id', $trip->id)->where('user_id', $user->id)->first();
        if($existingReview){
            $existingReview->delete();
 
            return response()->json(['message' => 'Recensione eliminata con successo.']);
        } else return response()->json(['message' => 'Recensione inesistente']);
    }

    public function createItinerary($itinerary_id, $trip_id)
    {
        $user = Auth::user();
        $itinerary = Itinerary::findOrFail($itinerary_id);
        $trip = Trip::findOrFail($trip_id);
        $existingItineraryTrip = Itinerarytrip::where('trip_id', $trip->id)->where('itinerary_id', $itinerary->id)->first();

        if(!$existingItineraryTrip)
        {
            if($user->HasRole('administrator') || $user->hasRole('organizer'))
            {
                $itinerarytrip= Itinerarytrip::create([

                    'itinerary_id' => $itinerary->id,
                    'trip_id' => $trip->id,
                ]);

                return response()->json([
                    'itinerario del  viaggio' => $itinerarytrip,
                    'message'=> 'Itinerario creato con successo'
                ]);

            }
            else return response()->json(['message' => 'Impossibile creare itinerario']);
        }
        else return response()->json(['message' => 'Non disponi dei permessi  per usare questa funzione']);
    }
}