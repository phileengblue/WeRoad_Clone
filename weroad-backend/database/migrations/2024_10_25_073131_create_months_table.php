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
        Schema::create('months', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('title');
            $table->string('subTitle')->nullable();
            $table->string('descriptionTitle');
            $table->string('descriptionSubTitle')->nullable();
            $table->longText('description');
            $table->string('tableTitle');
            $table->unsignedBigInteger('filestorage_id')->nullable();
            $table->foreign('filestorage_id')->references('id')->on('filestorage');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('months');
    }
};
