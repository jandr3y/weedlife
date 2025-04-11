<?php

namespace App\Actions\Cashback;

use App\Actions\Action;
use App\Models\CashbackHistory;

class GetCashbackHistory extends Action
{

    public function run(...$args)
    {
        [$user] = $args;

        return CashbackHistory::where('user_id', $user->id)->get();
    }

}
