<?

namespace App\Providers;

use App\Listeners\SeedTenantDatabase;
use Illuminate\Support\ServiceProvider;
use Stancl\Tenancy\Events\DatabaseMigrated;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        DatabaseMigrated::class => [
            SeedTenantDatabase::class,
        ],  
    ];
}
