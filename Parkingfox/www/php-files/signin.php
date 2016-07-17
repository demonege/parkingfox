<?php
header('Access-Control-Allow-Origin: *');

require('sql.php');
session_start();

$datas = $_GET;

$datas['password'] = md5($datas['password']);

$datas['add_date'] = time();
$datas['session'] = session_id();

$table = 'user';

$sql = new \sqlfunctions\sqlfunctions();

$sql->insert($datas,$table);

?>