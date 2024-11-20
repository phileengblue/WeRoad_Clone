<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use App\Models\Trip;
use App\Models\Type;
use App\Models\User;
use App\Models\Eta;
use App\Models\Periods;
use App\Models\Itinerary;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
class FilterController extends Controller
{
 
    public function filter(Request $request)
    {
        $trips = Trip::query();
        $query1 = Type::query();
        $ordering = $request->ordering;
        $counter = 0;
        $counter1 = 0;
 
       $validatedData = $request->validate([
        'title' => 'string|max:255',
        'start_date' => '|date|date_format:Y-m-d',
        'end_date' => '|date|date_format:Y-m-d|after_or_equal:start_date',
        'status' => '|string',
        'max_slots' => 'integer|min:1',
        'min_slots' => 'integer|min:1|max:',
        'name' => 'string',
        'range' => 'string',
        'min'=>'integer',
        'max'=>'integer',
        'durationmax' =>'numeric',
        'durationmin' => 'numeric',
        'itinerary_name' => 'string',
        'type_name' => 'string',
        'period' => 'nullable|string'
        
        
       ]);
 
       $validateData = $request->all();
 
       //Filtro per Stato del viaggio
       if (isset($validatedData['status']) && !empty($validatedData['status']))
        {
            $trips = $trips->where('status', $validatedData['status']);
            $counter++;
        }

        if (isset($validatedData['start_date']) && !empty($validatedData['start_date'] && isset($validateData['end_date']) && !empty($validateData['end_date']))) {
    $startDate = isset($validatedData['start_date']) ? Carbon::parse($validatedData['start_date']) : null;
    $endDate = isset($validatedData['end_date']) ? Carbon::parse($validatedData['end_date']) : null;
    
    $trips = $trips->where('start_date', $validatedData['start_date'])
                   ->where('end_date', $validatedData['end_date']);

        }


        //Filtro per tipologia del viaggio
        if(isset($validatedData['name']) && !empty($validatedData['name']))
        {
            $query1->where('name', $validatedData['name'])->get();
        }
        //Filtro sulla targhetta dell'età consigliata per il viaggio
        if(isset($validatedData['range']) && !empty($validatedData['range'])) {
            $trips = $trips->whereHas('eta', function ($query) use ($validatedData) {
                $query->where('range', $validatedData['range']);
            })->with('filestorage');
 
            $counter++;
 
        }
       // Filtro sul nome dell'itinerario
        if (isset($validatedData['itinerary_name']) && !empty($validatedData['itinerary_name'])) {
            $itineraryName = $validatedData['itinerary_name'];
 
            // Trova l'itinerario principale
            $mainItinerary = Itinerary::where('name', 'like', "%{$itineraryName}%")->first();

            $counter++;
 
            if ($mainItinerary) {
                // Trova tutti gli itinerari figli (ricorsivamente)
                $itineraryIds = collect([$mainItinerary->id]);
 
                // Funzione per trovare tutti i figli di un itinerario
                $getChildItineraries = function ($parentId) use (&$getChildItineraries, &$itineraryIds) {
                    $children = Itinerary::where('parent_id', $parentId)->get();
                    foreach ($children as $child) {
                        $itineraryIds->push($child->id);
                        $getChildItineraries($child->id); // Chiamata ricorsiva per trovare i figli dei figli
                    }
                };
 
                // Trova tutti i figli dell'itinerario principale
                $getChildItineraries($mainItinerary->id);
 
                // Filtra i viaggi che appartengono all'itinerario principale o a uno dei suoi figli
                $trips = $trips->whereHas('itineraries', function ($query) use ($itineraryIds) {
                    $query->whereIn('itinerary_id', $itineraryIds->toArray());
                })->with('filestorage');
 
                
            }
            else
            {
                return response()->json(['message' => 'Nessun viaggio disponibile per questo paese',
                                                'counter'=> $counter]);
            }
        }
 
 
        //Filtro sul nome del tipo di viaggio
        if(isset($validatedData['type_name']))
        {
            $typeName = $validatedData['type_name'];
 
            // Filtrare i viaggi in base al nome dell'itinerario
            $trips = Trip::whereHas('types', function ($query) use ($typeName) {
                $query->where('name', 'like', "%{$typeName}%");
            })->with('filestorage');
        }
        //Filtro per prezzo del viaggio minore di (prezzo)
        if(isset($validatedData['min']) && !empty($validatedData['min']))
        {
            $trips= $trips->where('price', '<=', $validatedData['min']);
            $counter++;
        }
        //Filtro per prezzo del viaggio maggiore di (prezzo)
        if(isset($validatedData['max']) && !empty($validatedData['max']))
        {
            $trips = $trips->where('price', '>=', $validatedData['max']);
            $counter++;
        }
        //Filtro per la durata minore di(duration)
        if(isset($validatedData['durationmax']) && !empty($validatedData['durationmax']))
        {
            $trips = $trips->where('duration', '<=', $validatedData['durationmax']);
            $counter++;
        }
        //Filtro per la durata maggiore di (duration)
        if(isset($validatedData['durationmin']) && !empty($validatedData['durationmin']))
        {
            $trips = $trips->where('duration', '>=', $validatedData['durationmin']);
            $counter++;
        }
 
 
        //Ordinamento per prezzo minore
        if($ordering == 'min')
        {
            $trips = $trips->orderBy('price');
        }
        //Ordinamento per durata minore
        if($ordering == 'durationmin')
        {
            $trips = $trips->orderBy('duration');
        }
        //Ordinamento per durata maggiore
        if($ordering == 'durationmax')
        {
            $trips = $trips->orderByDesc('duration');
        }
        //Ordinamento per data più vicina a quella odierna
       if($ordering == 'start_date')
        {
            $trips = Trip::orderBy('start_date');
                
        }
 
        $keyword = $request->keyword;
 
 
        // Searchbar: Cerca viaggi in base al titolo del viaggio o al nome dell'itinerario
        if(isset($keyword) && !empty($keyword)){
            // Cerca viaggi il cui titolo corrisponde alla keyword oppure che hanno un itinerario con nome simile alla keyword
            $trips = Trip::where('title', 'like', "%{$keyword}%")
                ->orWhereHas('itineraries', function ($query) use ($keyword) {
                    $query->where('name', 'like', "%{$keyword}%");
                });
                
        }
 
 
        /*if (isset($validateData['period']) && $validateData['period'] == "Ponte del 1 novembre") {
            $trips = Trip::whereBetween('start_date', ['2024-10-25', '2024-11-03'])
                         ->whereBetween('end_date', ['2024-10-25', '2024-11-03']);
        }
 
        if (isset($validateData['period']) && $validateData['period'] == "Natale") {
            $trips = Trip::whereBetween('start_date', ['2024-12-13', '2024-12-26'])
                         ->whereBetween('end_date', ['2024-12-13', '2024-12-26']);
        }
 
        if (isset($validateData['period']) && $validateData['period'] == "Capodanno") {
            $trips = Trip::whereBetween('start_date', ['2024-12-20', '2024-12-31'])
                         ->whereBetween('end_date', ['2024-12-20', '2024-12-31']);
        }
 
        if (isset($validateData['period']) && $validateData['period'] == "Pasqua 2025") {
            $trips = Trip::whereBetween('start_date', ['2025-04-16', '2025-04-20'])
                         ->whereBetween('end_date', ['2025-04-16', '2025-04-20']);
        }
 
        if (isset($validateData['period']) && $validateData['period'] == "Ponte del 25 aprile 2025") {
            $trips = Trip::whereBetween('start_date', ['2025-04-19', '2025-05-04'])
                         ->whereBetween('end_date', ['2025-04-19', '2025-05-04']);
        }
 
        if (isset($validateData['period']) && $validateData['period'] == "Ponte 2 giugno 2025") {
            $trips = Trip::whereBetween('start_date', ['2025-05-29', '2025-06-08'])
                         ->whereBetween('end_date', ['2025-05-29', '2025-06-08']);
        }*/
 
 
 
       if (isset($validateData['period'])) {
            // Cerca il periodo nella tabella 'periods'
            $period = Periods::where('name', $validateData['period'])->first();
        
            // Se il periodo non esiste, restituisci un messaggio di errore
            if (!$period) {
                return response()->json(['message' => 'Il periodo selezionato non esiste.']);
            }
        
            // Ottieni la data odierna
            $currentDate = now();
        
            // Se il periodo non è già scaduto, controlla se deve essere marcato come scaduto
            if (!$period->expired && $currentDate->isAfter($period->end_date)) {
                // Aggiorna il campo expired a true se la data corrente supera la fine del periodo
                $period->expired = true;
                $period->save();
        
                return response()->json(['message' => 'Il periodo selezionato è appena scaduto.']);
            }
        
            // Se il periodo è già scaduto, restituisci un messaggio di errore e termina
            if ($period->expired) {
                return response()->json(['message' => 'Il periodo selezionato è scaduto.']);
            }
        
            // Se il periodo non è scaduto, recupera i viaggi che rientrano nel range di date del periodo
            $trips = Trip::where('start_date', '>=', $period->start_date)
                         ->where('end_date', '<=', $period->end_date);
        
        }        
    
 
 
 
        $trips = $trips->with('itineraries', 'user')->where('expired', false)->get();
        /*$itineraries = $itineraries->get();
        $query1 = $query1->get();*/
 
        if ($trips->isEmpty()) {
            // Restituisci un messaggio di errore
            return response()->json([
                'error' => 'Nessun viaggio trovato con i filtri selezionati.',
                'counter'=> $counter,
                'counter1'=> $counter1,
            ], 404);
        }
 
         
    $tripData = $trips->map(function ($trip) {
        $userImage = $trip->user && $trip->user->filestorage
            ? asset('storage/' . $trip->user->filestorage->path)
            : null;

            $tripImage = $trip->filestorage
            ? asset('storage/' . $trip->filestorage->path)
            : null;

        

        return [
            'id' => $trip->id,
            'title' => $trip->title,
            'price' => $trip->price,
            'duration' => $trip->duration,
            'start_date' => $trip->start_date,
            'end_date' => $trip->end_date,
            'status' => $trip->status,
            'itineraries' => $trip->itineraries->pluck('name'), // Itinerari associati
            'user_name' => $trip->user ? $trip->user->firstname : null,
            'user_surname' => $trip->user ? $trip->user->lastname : null,
            'range' => $trip->eta ? $trip->eta->range : null,
            'user_image' => $userImage, // URL dell'immagine dell'utente
            'trip_image' => $tripImage, // URL dell'immagine del viaggio
        ];
    });
 
    
        $response = [
            'trips' => $tripData,
            'query1' => $query1, // Recupera il filtro per tipologia
            'counter' => $counter,
            'counter1' => $counter1,
 
        ];
 
 
 
        return response()->json($response);
    }
 
    public function getTripsByMonth(Request $request)
    {
        // Ottieni mese e anno dalla query string, con valori predefiniti
        $month = $request->query('month', Carbon::now()->month);
        $year = $request->query('year', Carbon::now()->year);
 
        // Crea la data di inizio e fine del mese
        $startOfMonth = Carbon::createFromDate($year, $month, 1)->startOfMonth();
        $endOfMonth = Carbon::createFromDate($year, $month, 1)->endOfMonth();
 
        // Esegui la query per ottenere i viaggi
        $trips = Trip::whereBetween('start_date', [$startOfMonth, $endOfMonth])
                    ->orderBy('start_date', 'asc')
                    ->get();
        

                    $tripData = $trips->map(function ($trip) {
                        $userImage = $trip->user && $trip->user->filestorage
                            ? asset('storage/' . $trip->user->filestorage->path)
                            : null;

                            $tripImage = $trip->filestorage
                            ? asset('storage/' . $trip->filestorage->path)
                            : null;
                
                        return [
                            'id' => $trip->id,
                            'title' => $trip->title,
                            'price' => $trip->price,
                            'duration' => $trip->duration,
                            'start_date' => $trip->start_date,
                            'end_date' => $trip->end_date,
                            'status' => $trip->status,
                            'itineraries' => $trip->itineraries->pluck('name'), // Itinerari associati
                            'user_name' => $trip->user ? $trip->user->firstname : null,
                            'user_surname' => $trip->user ? $trip->user->lastname : null,
                            'range' => $trip->eta ? $trip->eta->range : null,
                            'user_image' => $userImage, // URL dell'immagine dell'utente
                            'trip_image' => $tripImage,
                        ];
                    });
        // Restituisci i dati
        return response()->json($tripData);
    }
 
    
}