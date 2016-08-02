<?php

$datas = $_GET;

$receiver = ''; //kontak email adresse
$sender = $datas['sender'];
$subject = $datas['subject'];
$message = $datas['message'];

mail($receiver,$subject,$message);

?>