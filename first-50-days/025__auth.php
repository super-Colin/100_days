<?php
session_start();
if(!isset($_SESSION["username"])){
header("Location: 025__login.php");
exit(); }
?>