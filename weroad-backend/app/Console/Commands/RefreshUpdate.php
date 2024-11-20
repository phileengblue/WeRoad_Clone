<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Jobs\TripsPeriodUpdate;
use App\Models\Trip;
use App\Models\Periods;

class RefreshUpdate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'job:trips-update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Esegui il job per aggiornare i viaggi scaduti';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // Ottieni i viaggi e i periodi
        $trips = Trip::all(); 
        $periods = Periods::all(); 

        // Dispatcha il job
        TripsPeriodUpdate::dispatch($trips, $periods);

        // Messaggio di conferma
        $this->info('Il job per aggiornare i viaggi scaduti è stato eseguito.');

        return 0;
    }
}
