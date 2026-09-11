<?php

namespace App\Controllers;

use App\Models\UserModel;
use App\Models\RoleModel;



class Auth extends BaseController
{


    protected $userModel;
    protected $roleModel;

    public function __construct()
    {
        $this->userModel = new UserModel();
        $this->roleModel = new RoleModel();
    }


    public function action_login()
    {
        $username = $this->request->getPost('username');
        $password = $this->request->getPost('password');

        $user = $this->userModel->where('username', $username)->first();

        if ($user) {
            if (md5($password) === $user['password']) {
                $session = session();
                $sessionData = [
                    'id_user' => $user['id_user'],
                    'username' => $user['username'],
                    'id_role' => $user['id_role']
                ];
                $session->set($sessionData);

                switch ($user['id_role']) {
                    case 1:
                        return redirect()->to(base_url('admin/dashboard'));
                    case 2:
                        return redirect()->to(base_url('cashier/dashboard'));
                }
            } else {
                return redirect()->to(base_url('/'))->withInput()->with('error', 'Password Salah');
            }
        } else {
            return redirect()->to(base_url('/'))->withInput()->with('error', 'User Tidak Ditemukan');
        }
    }

    public function logout()
    {
        $session = session();
        $session->destroy();
        return redirect()->to(base_url('/'));
    }
}
