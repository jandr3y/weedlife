<?php

namespace App\Actions\User;

use App\Actions\Action;
class UpdateUserAction extends Action
{
    public function run(...$args)
    {
        [$user, $data] = $args;

        $user->name = $data['name'];
        $user->phone = $data['phone'];
        $user->document = $data['document'];
        $user->birthdate = $data['birthdate'];

        $user->save();

        return $user;
    }

}
