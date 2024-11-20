<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\DescriptionController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\FilterController;
use App\Http\Controllers\MonthController;
use App\Http\Controllers\PasswordResetController;
use App\Http\Controllers\TripController;
use Illuminate\Http\Request;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(AuthController::class)->prefix('auth')->group(function($router){
    Route::post('login', 'login');
    Route::post('logout', 'logout');
    Route::get('me','me');
    Route::post('changePassword', 'changePassword');

});

Route::controller(UserController::class)->prefix('user')->group(function($router){
    Route::post('userRegistration', 'userRegistration');
    Route::get('index','index');
    Route::get('{id}/show', 'show');
    Route::post('{id}/update', 'update');
    Route::delete('{id}/delete','destroy');
    Route::post('{idTrip}/joinTrip', 'joinTrip');
    Route::delete('{idTrip}/deleteReservation', 'CancelReservation');
    Route::post('{idTrip}/review', 'review');
    Route::get('{id}/getReview', 'getReview');
    Route::delete('{idTrip}/deleteReview', 'deleteReview');
    Route::put('{idTrip}/updateReview', 'updateReview');
    Route::post('{idItinerary}/{idTrip}/createItinerary' ,'createItinerary');
});

Route::controller(AdminController::class)->prefix('admin')->group(function($router){
    Route::post('{userid}/updateUserRole', 'updateUserRole');

});

Route::controller(PasswordResetController::class)->prefix('password')->group(function($route){
    Route::post('forgetPassword', 'forgetPassword');
    Route::get('resetPasswordLoad', 'resetPasswordLoad');
    Route::post('resetPassword', 'resetPassword');

});

Route::controller(TripController::class)->prefix('trip')->group(function($route){
    Route::post('TripCreate', 'TripCreate');
    Route::get('index','index');
    Route::get('{id}/show', 'show');
    Route::post('{id}/update', 'Tripupdate');
    Route::delete('{id}/delete','destroy');

});

Route::controller(FilterController::class)->prefix('filter')->group(function($route){

    Route::get('filter', 'filter');
    Route::get('getTripsByMonth', 'getTripsByMonth');
});

Route::controller(FileController::class)->prefix('file')->group(function($route){
    Route::get('viewDatas/{id}', 'getFileDataById');
});

Route::controller(MonthController::class)->prefix('month')->group(function($route){
    Route::get('index', 'index');
    Route::get('{idMonth}/show', 'show');
});