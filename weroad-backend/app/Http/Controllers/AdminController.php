<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laratrust\Facades\Laratrust;
use Laratrust\Models\LaratrustRole;
use Laratrust\Models\Role;

class AdminController extends Controller
{
    // Metodo per modificare il ruolo di un utente
    public function updateUserRole(Request $request, $userId)
    {


        $user = Auth::user();
        
       // $user ->attachRole('administrator');

        // Verifica che l'utente autenticato sia un amministratore
        // if (!$user->hasRole('administrator')) {
        //     return response()->json(['error' => 'Accesso negato'], 403);
        // }
        $request->validate([
            'role' => 'required|string|exists:roles,name',
        ]);
      
        if ($user->hasRole('administrator')) {
            
            $user = User::findOrFail($userId);

        
            $user->syncRoles([]);
    
            $user->attachRole($request->role);
    
            $user->update();
        }


        return response()->json(['success' => 'Ruolo aggiornato con successo']);
    }



}
