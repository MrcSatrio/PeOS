<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index(): string
    {
        return view('login');
    }

    public function pos(): string
    {
        return view('cashier');
    }

    public function login()
    {
        // When staff signs in, redirect to the cashier / POS reception terminal
        return redirect()->to(base_url('pos'));
    }
}
