<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }

    // dans la migration add_game_account_to_users_table

    public function top ()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('game_account')->nullable();
        });
    }

    public function bottom ()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('game_account');
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
