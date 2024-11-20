<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Carbon\Carbon;
use App\Models\Trip;
use App\Models\Periods;

class TripsPeriodUpdate implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */

     protected $trips,$periods;
    public function __construct($trips, $periods)
    {
        $this->trips = $trips;
        $this->periods = $periods;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $today = Carbon::today();

        // Controllo della Start_Date di un viaggio e conseguente modifica dell'expired
        Trip::where('start_date', '<', $today)
            ->where('expired', false) // Solo viaggi non ancora marcati come scaduti
            ->update(['expired' => true]);

        // Recupero dei periodi scaduti
        $expiredPeriods = Periods::where('end_date', '<', $today)
            ->get();

        foreach ($expiredPeriods as $period) {
            
            $currentYear = Carbon::now()->year;

            // Aggiungi un anno alla start_date e end_date
            $newStartDate = Carbon::parse($period->start_date)->addYear();
            $newEndDate = Carbon::parse($period->end_date)->addYear();

            // Cambia il nome del periodo, sostituendo l'anno corrente con il prossimo
            $newYear = $newStartDate->year; 
            $newName = preg_replace('/\d{4}/', $newYear, $period->name); 

            // Aggiorna il periodo con i nuovi dati
            $period->name = $newName; 
            $period->start_date = $newStartDate; 
            $period->end_date = $newEndDate; 
            $period->expired = false; 
            $period->save(); 
        }
    }


}
