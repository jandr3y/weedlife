<?php

namespace App\Actions;

abstract class Action {

  public function run() {
    throw new \Exception("Method run not implemented on action class");
  }

}