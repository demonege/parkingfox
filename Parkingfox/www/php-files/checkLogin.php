<?php
header('Access-Control-Allow-Origin: *');

require('sql.php');
$sql = new \sqlfunctions\sqlfunctions();

$datas = $_GET;

$where = 'identifire = '

$table = 'user';

$result = $sql->select($table,$where);