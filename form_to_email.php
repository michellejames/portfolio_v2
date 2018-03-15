<?php

//print_r($_POST);


$honeypot = $_POST['honeypot'];
$user_name = $_POST['user_name'];
$user_email = $_POST['user_email'];
$user_message = $_POST['user_message'];

if ($honeypot) die;

mail ( "webdevshelly@gmail.com" , "Email from website" , $user_name . " - " . $user_email . " - " . $user_message );