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
        //
        Schema::table('users', function(Blueprint $table){
            $table->string('phone', 50)->nullable();
            $table->string('document', 50)->nullable();
            $table->string('role', 30)->default('CUSTOMER');
            $table->string('invite_code', 40)->index('idx_invite_code');
            $table->dateTime('expire_at')->nullable();
            $table->foreignId('invited_by')->nullable()->constrained('users')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::table('users', function(Blueprint $table){
            $table->dropForeign(['invited_by']);
            $table->dropColumn('invited_by');

            $table->dropColumn(['role', 'invite_code', 'expire_at']);
        });
    }
};
