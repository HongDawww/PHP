<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('login');
});

Route::get('/user/login',[UserController::class,'loginget'])->name('user.loginget');
Route::post('/user/login',[UserController::class,'loginpost'])->name('user.loginpost');
Route::get('/user/registe',[UserController::class,'registeget'])->name('user.registget');
Route::post('/user/registe',[UserController::class,'registepost'])->name('user.registepost');

 
// GET|HEAD        user/{user}/edit ............................ user.edit › UserController@edit  로그인 처리
// GET|HEAD        user ...................................... user.index › UserController@index  로그인 화면이동

// POST            user ...................................... user.store › UserController@store  회원 가입처리
// GET|HEAD        user/create ............................. user.create › UserController@create  회원 가입 화면 이동

// GET|HEAD        user/{user} ................................. user.show › UserController@show  회원 정보 화면 이동
// PUT|PATCH       user/{user} ............................. user.update › UserController@update  회원 정보 수정

// DELETE          user/{user} ........................... user.destroy › UserController@destroy  회원 탈퇴 처리

