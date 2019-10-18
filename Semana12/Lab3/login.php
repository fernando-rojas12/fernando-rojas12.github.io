<?php

  // Activate error reporting
  ini_set('display_errors', 1); error_reporting(-1);

  include "Connection.php";
  include "User.php";
  include "UserDBModel.php";

  if(!isset($_SESSION)){
    session_start();
  }

  $pageUserName = $_POST['pageUserName'];
  $password = $_POST['password'];

  $homePage = "home.php";
  $loginPage = "login.html";
  $registerPage = "register.html";

  // Stablish connection
  $connection = Connection::connect();

  // Query data from DB
  $model = new UserDBModel($connection);
  $userRetrieved = $model->getUser($pageUserName);

  // If user credentials match
  if (!is_null($userRetrieved) && $userRetrieved->getPassword() == $password) {
    $_SESSION['pageUserName'] = $pageUserName;
    $_SESSION['password'] = $password;
    include_once $homePage;
  }
  else {
    echo "\nUser credentials not valid";
    session_destroy();
    include_once $loginPage;
  }

?>
