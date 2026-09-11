<?php

namespace App\Controllers;

class Cashier extends BaseController
{
    public function index(): string
    {
        return view('cashier');
    }
}
