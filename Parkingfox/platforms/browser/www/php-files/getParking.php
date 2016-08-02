<?php
header('Access-Control-Allow-Origin: *');

require('sql.php');

$sql = new \sqlfunctions\sqlfunctions();

$datas = $_GET;

$where['identifire'] = $datas['identifire'];
$table = 'user';
$result = $sql->select($table,$where,'id');
if ($result) {

} else {
    echo 'false';
    exit;
}

unset($datas['identifire']);

$table = 'parking';

$where = $datas;

$result = $sql->select($table,$where,'*');

if ($result) {
    echo $result;
} else {
    echo 'false';
}