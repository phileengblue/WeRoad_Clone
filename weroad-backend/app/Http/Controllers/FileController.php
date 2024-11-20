<?php

namespace App\Http\Controllers;
use App\Models\Filestorage;
use Illuminate\Http\Request;

class FileController extends Controller
{
    public static function storeFile(Request $request, $folder, $fileInputName, $type)
    {
        if ($request->hasFile($fileInputName)) {
            $file = $request->file($fileInputName);
            $fileName = time() . '_' . $file->getClientOriginalName();
            $filePath = $file->storeAs($folder, $fileName, 'public');
 
            return Filestorage::create([
                'path' => $filePath,
                'name' => $fileName,
                'extension' => $file->getClientOriginalExtension(),
                'type' => $type,
            ]);
        }
 
        return null;
    }

    /*public static function respondWithFileData($filestorage)
    {
        if ($filestorage) {
            return response()->json([
                'message' => 'File uploaded successfully',
                'file' => [
                    'id' => $filestorage->id,
                    'name' => $filestorage->name,
                    'extension' => $filestorage->extension,
                    'type' => $filestorage->type,
                    'url' => asset('storage/' . $filestorage->path), // Genera l'URL per l'immagine
                ]
            ], 201); // Codice 201 per indicare che la risorsa è stata creata
        }

        return response()->json([
            'message' => 'No file uploaded',
        ], 400); // Codice 400 per errore di richiesta
    }*/

    public function getFileDataById($id)
    {
        // Trova il record Filestorage tramite l'ID
        $fileStorage = Filestorage::find($id);
 
        // Controlla se il file esiste
        if ($fileStorage) {
            return response()->json([
                'file' => [
                    'path' => $fileStorage->path,
                    'name' => $fileStorage->name,
                    'extension' => $fileStorage->extension,
                    'type' => $fileStorage->type,
                    'url' => asset('storage/' . $fileStorage->path),
                ],
                'message' => 'File data retrieved successfully.'
            ], 200);
        } else {
            return response()->json([
                'message' => 'File not found.'
            ], 404);
        }
    }
}
