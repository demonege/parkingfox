<?php
header('Access-Control-Allow-Origin: *');

require('sql.php');

$where = $_GET;

$where['password'] = md5($where['password']);

$table = 'user';

$sql = new \sqlfunctions\sqlfunctions();

$result = $sql->select($table,$where);

if ($result != 'NULL') {
    $uid = $result[0];
    echo $uid;
} else {
    echo 'false';
}