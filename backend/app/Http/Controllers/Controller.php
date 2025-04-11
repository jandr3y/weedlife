<?php

namespace App\Http\Controllers;

abstract class Controller extends \Illuminate\Routing\Controller
{
    
    /**
     * @return \Tymon\JWTAuth\JWTGuard
     */
    protected function auth()
    {
        return auth('api');
    }
}
