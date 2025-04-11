<?php

namespace App\Http\Controllers;

use App\Actions\User\CreateUserAction;
use App\Actions\User\GetUserAction;
use App\Actions\User\UpdateUserAction;
use App\Http\Requests\User\CreateUserRequest;
use App\Http\Requests\User\UpdateUserRequest;

class UserController extends Controller
{
    public function __construct() {}


    public function store(CreateUserRequest $request, CreateUserAction $action) 
    {
        return $action->run($request->all());
    }

    public function update(UpdateUserRequest $request, UpdateUserAction $action) 
    {
        return $action->run($this->auth()->user(), $request->all());
    }

    public function get(GetUserAction $action)
    {
        return [ 'a' => 1 ];
    }

    public function me(GetUserAction $action)
    {
        $user = $this->auth()->user();
        return $action->run($user->id);
    }

}
