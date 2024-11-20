<?php

namespace App\Http\Controllers;

use App\Models\Month;
use Illuminate\Http\Request;

class MonthController extends Controller
{
    // Funzione per ottenere tutti i dati dalla tabella 'months'
    public function index()
    {
        // Recupera tutti i record dalla tabella 'months'
        $months = Month::all();

        // Ritorna i dati come JSON
        return response()->json($months);
    }

    public function show($id)
{
    // Recupera il record Month con i dettagli del file associato
     $months = Month::findOrFail($id);
     
    // Trova i dettagli del file immagine associato al trip, se presente
    $fileData = null;
    if ($months->filestorage_id) {
        $fileStorage = app(FileController::class)->getFileDataById($months->filestorage_id);
        if ($fileStorage->getStatusCode() == 200) {
            $fileData = $fileStorage->getData()->file;
        }
    }
 
    return response()->json([
        'month' => $months,
        'image' => $fileData, // Dati dell'immagine
    ]);

}

}