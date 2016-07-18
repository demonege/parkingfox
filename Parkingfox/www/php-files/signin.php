<?php
header('Access-Control-Allow-Origin: *');

require('sql.php');

$datas = $_GET;

$datas['password'] = md5($datas['password']);

$datas['add_date'] = time();

$table = 'user';

$sql = new \sqlfunctions\sqlfunctions();

$sql->insert($datas,$table);

return true;
?>