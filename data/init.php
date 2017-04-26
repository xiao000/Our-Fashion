<?php
header('content-type:application/json,charset=utf-8');
$conn = mysqli_connect('127.0.0.1','root', '', 'ss', 3306);

$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);
