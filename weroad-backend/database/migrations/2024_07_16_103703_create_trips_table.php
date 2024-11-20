<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trips', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->date('start_date');
            $table->date('end_date');
            $table->enum('status',['confirmed','almost confirmed','last places available', 'sold out', 'planned', 'on request'])->nullable();
            $table->integer('max_slots');
            $table->integer('min_slots');
            $table->float('price');
            $table->integer('duration');
            $table->boolean('expired')->default(false);
            $table->timestamps();
            $table->unsignedBigInteger('filestorage_id')->nullable();
            $table->foreign('filestorage_id')->references('id')->on('filestorage');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trips');
    }
};
