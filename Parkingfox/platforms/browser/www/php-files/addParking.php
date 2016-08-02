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

$datas['userId'] = $result[0];

$table = 'parking';

$result = $sql->insert($datas,$table);

if ($result) {
    echo 'true';
} else {
    echo 'false';
}
