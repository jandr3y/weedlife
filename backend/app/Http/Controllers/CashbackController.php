<?php

namespace App\Http\Controllers;

use App\Actions\Cashback\GetCashbackDetailsAction;
use App\Actions\Cashback\GetCashbackHistory;
use App\Actions\User\CreateUserAction;
use App\Actions\User\GetUserAction;
use App\Http\Requests\User\CreateUserRequest;

class CashbackController extends Controller
{
    public function __construct() {}


    public function store(CreateUserRequest $request, CreateUserAction $action) 
    {
        return $action->run($request->all());
    }

    public function getDetails(GetCashbackDetailsAction $action)
    {
        $user = $this->auth()->user();
        return $action->run($user);
    }

    public function history(GetCashbackHistory $action)
    {
        return $action->run($this->auth()->user());
    }

}
