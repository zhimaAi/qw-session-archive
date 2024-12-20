<?php

namespace Modules\CustomerTag;

use Common\Broadcast;
use Common\RouterProvider;
use Modules\CustomerTag\Controller\TagController;
use Modules\Main\Library\Middlewares\CurrentCorpInfoMiddleware;
use Modules\Main\Library\Middlewares\UserRoleMiddleware;
use Yiisoft\Auth\Middleware\Authentication;
use Yiisoft\Router\Group;
use Yiisoft\Router\Route;

class Routes extends RouterProvider
{
    public function init(): void
    {
        echo "ok\n";
        return;
    }

    public function getBroadcastRouters(): array
    {
        return [
            Broadcast::event('test')->from('main')->handle(function (string $payload) {
                ddump($payload);
            }),
        ];
    }

    public function getHttpRouters(): array
    {
        return [
            Group::create('/api')
                ->middleware(Authentication::class)
                ->middleware(CurrentCorpInfoMiddleware::class)
                ->middleware(UserRoleMiddleware::class)
                ->routes(
                    Route::get('/tags')->action([TagController::class, 'list']),
                    Route::post('/tags')->action([TagController::class, 'updateOrCreate']),
                    Route::delete('/tags/group/{group_id:.+}')->action([TagController::class, 'destroyGroup']),
                    Route::delete('/tags/{tag_id:.+}')->action([TagController::class, 'destroyTag']),
                ),
        ];
    }

    public function getConsoleRouters(): array
    {
        return [];
    }

    public function getConsumerRouters(): array
    {
        return [];
    }
}
