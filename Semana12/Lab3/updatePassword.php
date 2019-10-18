<?php
  // Activate error reporting
  ini_set('display_errors', 1); error_reporting(-1);

  include "Connection.php";
  include "UserDBModel.php";

  if(!isset($_SESSION)){
    session_start();
  }

  if ($_SESSION['pageUserName'] == null) {
    echo "No hay autorización";
    die();
  }

  $formCurrentPassword = $_POST["currentPassword"];
  $formNewPassword = $_POST["newPassword"];

  $realCurrentPassword = $_SESSION["password"];
  $onSessionUserName = $_SESSION['pageUserName'];

  if ($formCurrentPassword == $realCurrentPassword) {
    $connection = Connection::connect();
    $model = new UserDBModel($connection);
    $model->updatePassword($onSessionUserName, $formNewPassword);

    echo "Password updated succesfully";
    include_once "home.php";
  }
  else {
    echo "Password incorrect";
    include_once "updatePassword.html";
  }


?>
