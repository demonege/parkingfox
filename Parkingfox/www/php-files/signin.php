<?php
header('Access-Control-Allow-Origin: *');

require('sql.php');

$datas = $_GET;

$datas['password'] = md5($datas['password']);

$datas['add_date'] = time();

$table = 'user';

$sql = new \sqlfunctions\sqlfunctions();

$result = $sql->insert($datas,$table);

if($result)
{
    $where['email'] = $datas['email'];
    $uid = $sql->select($table,$where,'id');
    echo $uid[0];
}
else
{
    echo 'false';
}