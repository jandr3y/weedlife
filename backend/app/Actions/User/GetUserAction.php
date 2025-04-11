<?php

namespace App\Actions\User;

use App\Actions\Action;
use App\Models\User;

class GetUserAction extends Action
{

    public function run(...$args)
    {
        [$id] = $args;
        return User::where(['id' => $id])->firstOrFail();
    }
}
