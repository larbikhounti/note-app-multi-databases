<?php

namespace App\Listeners;


use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Artisan;

use Stancl\Tenancy\Events\DatabaseMigrated;

class SeedTenantDatabase
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(DatabaseMigrated $event): void
    {

        $event->tenant->run(function () {
            Artisan::call('db:seed', [
                '--class' => 'TenantDatabaseSeeder',
                '--force' => true,
            ]);
        });
    }
}
