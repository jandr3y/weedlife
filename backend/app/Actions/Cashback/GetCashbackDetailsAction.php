<?php

namespace App\Actions\Cashback;

use App\Actions\Action;

class GetCashbackDetailsAction extends Action
{

    public function run(...$args)
    {
        [$user] = $args;

        return [
            'total' => 0,
            'monthly_total' => 0,
            'level' => 0   
        ];
    }

}
