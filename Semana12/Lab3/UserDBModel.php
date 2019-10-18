<?php
include "Validator.php";

class UserDBModel {

  private $DBconnection;

  function __construct($DBconnection) {
      $this->DBconnection = $DBconnection;
  }

  // Returns True if success or a String of the error if failed
  public function insertUser($user) {
      $result = True;

      // Validate the user fields
      $result = Validator::validateUser($user);
      // echo "res in model [$result] <br>";
      if( ! is_integer($result)){
        // if result is not integer ...
        // echo "insert failed <br>";
        return $result;
      }
      // echo "continuing <br>";
      if ($statement = $this->DBconnection->prepare("INSERT INTO users VALUES (?, ?, ?, ?, ?, ?, ?, ?);")) {

        // Save user atribbutes
        $pageUserName = $user->getPageUserName();
        $userName = $user->getUserName();
        $lastName1 = $user->getLastName1();
        $lastName2 = $user->getLastName2();
        $password = $user->getPassword();
        $email = $user->getEmail();
        $phoneNumber = $user->getPhoneNumber();
        $areaCode = $user->getAreaCode();

        // All parameters are strings
        $statement->bind_param("ssssssss", $pageUserName, $userName, $lastName1, $lastName2, $password, $email, $phoneNumber, $areaCode);
        $result = $statement->execute();
        $statement->close();
      }
      $this->DBconnection->close();
      return ($result) ? Validator::$OK : "Query failed";
  }



  public function getUser($userName) {
    if ($statement = $this->DBconnection->prepare("SELECT * FROM users WHERE pageUserName = ?")) {
      $statement->bind_param("s", $userName); // "s" because paramater is a string
      $statement->execute();
      // Get user selected from database
      $selected_user = $this->queryToUser($statement->get_result());
      $statement->close();
    }
    $this->DBconnection->close();

    return $selected_user;
  }

  public function updatePassword($pageUserName, $newPassword) {
    $statement = $this->DBconnection->prepare("UPDATE users SET password = ? WHERE pageUserName = ?;");
    // All parameters are strings
    $statement->bind_param("ss", $newPassword, $pageUserName);
    $statement->execute();
    $statement->close();
    $this->DBconnection->close();
  }

  // Takes a database query result, fetches it's data and create a User object
  // with it.
  private function queryToUser($queryResult) {
    if ($queryResult->num_rows > 0) {
      $row = $queryResult->fetch_assoc();
      return new User($row['pageUserName'], $row['userName'], $row['lastName1'], $row['lastName2'], $row['password'], $row['email'], $row['phoneNumber'], $row['areaCode']);
    }
    else {
      exit("User does not exists");
      return NULL;
    }
  }


}
?>
