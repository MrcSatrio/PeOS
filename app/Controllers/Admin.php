<?php

namespace App\Controllers;

use App\Models\UserModel;
use App\Models\RoleModel;


class Admin extends BaseController
{
    protected $userModel;
    protected $roleModel;


    public function __construct()
    {
        $this->userModel = new UserModel();
        $this->roleModel = new RoleModel();
    }

    public function index(): string
    {
        $users = $this->userModel
            ->select('user.id_user, user.username, user.id_role, role.nama_role')
            ->join('role', 'role.id_role = user.id_role', 'left')
            ->findAll();
        $roles = $this->roleModel->findAll();

        return view('admin', ['users' => $users, 'roles' => $roles]);
    }

    public function saveUser()
    {
        $userId = $this->request->getPost('id_user');
        $roleId = (int) $this->request->getPost('id_role');
        $username = trim((string) $this->request->getPost('username'));
        $password = (string) $this->request->getPost('password');

        if ($username === '' || ! $this->roleModel->find($roleId) || ($userId === null && $password === '')) {
            return $this->response->setStatusCode(422)->setJSON(['message' => 'Data user tidak lengkap.']);
        }

        $data = [
            'username' => $username,
            'id_role' => $roleId,
        ];

        if ($password !== '') {
            $data['password'] = md5($password);
        }

        if ($userId === null || $userId === '') {
            $this->userModel->insert($data);
        } else {
            $this->userModel->update($userId, $data);
        }

        return $this->response->setJSON(['message' => 'User berhasil disimpan.']);
    }

    public function deleteUser()
    {
        $userId = $this->request->getPost('id_user');

        if (! $userId || ! $this->userModel->find($userId)) {
            return $this->response->setStatusCode(404)->setJSON(['message' => 'User tidak ditemukan.']);
        }

        $this->userModel->delete($userId);

        return $this->response->setJSON(['message' => 'User berhasil dihapus.']);
    }
}
