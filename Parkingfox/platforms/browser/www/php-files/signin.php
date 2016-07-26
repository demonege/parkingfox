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
    $uid = $sql->select($table,$where,'identifire');
    return($uid[0]);
}
else
{
    echo 'false';
}