<?php
header('Access-Control-Allow-Origin: *');

require('sql.php');
$sql = new \sqlfunctions\sqlfunctions();

$datas = $_GET;

$table = 'user';

$result = $sql->select($table,$datas);

if ($result) {
    echo 'true';
} else {
    echo 'false';
}
