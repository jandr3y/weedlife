<?php

namespace App\Actions;

abstract class Action
{
    abstract public function run(...$args);
}
