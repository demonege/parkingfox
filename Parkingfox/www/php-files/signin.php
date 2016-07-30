<?php
header('Access-Control-Allow-Origin: *');

require('sql.php');
$sql = new \sqlfunctions\sqlfunctions();

$datas = $_GET;

$datas['password'] = md5($datas['password']);

$datas['add_date'] = time();
$datas['identifire'] = $sql->generateRandomString();

$table = 'user';


$result = $sql->insert($datas,$table);
if($result)
{
    $where['email'] = $datas['email'];
    $identifire = $sql->select($table,$where,'identifire');
    echo($identifire[0]);
}
else
{
    echo 'false';
}