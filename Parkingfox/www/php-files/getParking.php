<?php
header('Access-Control-Allow-Origin: *');

require('sql.php');

$sql = new \sqlfunctions\sqlfunctions();

$datas = $_GET;

$table = 'parking';

$where = $datas;

$result = $sql->select($table,$where,'*');

if ($result) {
    echo $result;
} else {
    echo 'false';
}