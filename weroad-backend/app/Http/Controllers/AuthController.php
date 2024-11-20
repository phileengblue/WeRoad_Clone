<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpKernel\Attribute\Cache;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        // Prendi le credenziali email e password dalla richiesta
        $credentials = request(['email', 'password']);
    
        // Verifica se le credenziali sono corrette e genera un token
        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    
        // Ottieni l'utente autenticato
        $user = auth()->user();
    
        // Recupera i dati dell'immagine associata, se presenti
        $filestorage = $user->filestorage()->first();
    
        $userImage = $filestorage ? asset('storage/' . $filestorage->path) : null;
        // Risposta con il token e i dettagli dell'utente, inclusa l'immagine
        return response()->json([
            'token' => $this->respondWithToken($token),
            'user' => [
                'id' => $user->id,
                'image' => $userImage
            ]
        ]);
    }
    

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

    public function changePassword(Request $request)
    {
        $token = JWTAuth::parseToken();
        $user = $token->authenticate();
        $credentials = $request->only(['current_password', 'new_password', 'confirm_password']);

        // Validazione delle credenziali
        $validator = Validator::make($credentials, [
            'current_password' => 'required',
            'new_password' => 'required|min:6',
            'confirm_password' => 'required|same:new_password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->first()], 400);
        }

        // Verifico se la password attuale è corretta
        if (Hash::check($credentials['current_password'], $user->password)) {
            // Verifico se la nuova password è diversa da quella attuale
            if (!Hash::check($credentials['new_password'], $user->password)) {
                // Cifro la nuova password
                $newHashedPassword = Hash::make($credentials['new_password']);

                // Aggiorno la password nel database
                $user->update(['password' => $newHashedPassword]);

                return response()->json(['message' => 'Password modificata con successo'], 200);
            } else {
                return response()->json(['error' => 'La nuova password deve essere diversa da quella attuale'], 400);
            }
        }
        return response()->json(['error' => 'La password attuale non è corretta'], 400);
    }
}


