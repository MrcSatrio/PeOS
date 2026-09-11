<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('logout', 'Auth::logout');
$routes->post('auth/action_login', 'Auth::action_login');


$routes->get('pos', 'Home::pos');



$routes->group('admin', ['filter' => 'roleFilter'], function ($routes) {
    $routes->get('dashboard', 'Admin::index');
    $routes->post('users/save', 'Admin::saveUser');
    $routes->post('users/delete', 'Admin::deleteUser');
    $routes->get('menu', 'Admin::menu');
    $routes->post('update_status_makanan', 'Admin::update_status_makanan');
    $routes->get('transaksi', 'Admin::transaksi');
    $routes->post('update_status_transaksi', 'Admin::update_status_transaksi');
});

$routes->group('cashier', ['filter' => 'roleFilter'], function ($routes) {
    $routes->get('dashboard', 'Cashier::index');
});
