<?php
header('Access-Control-Allow-Origin: *');

require('sql.php');

$datas = $_GET;

$datas['password'] = md5($datas['password']);

$sql = new \sqlfunctions\sqlfunctions();

$sql->insert($datas);

?>