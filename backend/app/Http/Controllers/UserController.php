<?php

namespace App\Http\Controllers;

use App\Actions\User\CreateUserAction;

class UserController extends Controller
{
    public function __construct() {}


    public function store(CreateUserAction $action) 
    {
        return $action->run();
    }

}
