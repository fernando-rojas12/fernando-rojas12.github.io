<?php
  class User {

    private $pageUserName;
    private $userName;
    private $lastName1;
    private $lastName2;
    private $password;
    private $email;
    private $phoneNumber;
    private $areaCode;

    function __construct($pageUserName, $userName, $lastName1, $lastName2, $password, $email, $phoneNumber, $areaCode) {

        $this->pageUserName = $pageUserName;
        $this->userName = $userName;
        $this->lastName1 = $lastName1;
        $this->lastName2 = $lastName2;
        $this->password = $password;
        $this->email = $email;
        $this->phoneNumber = $phoneNumber;
        $this->areaCode = $areaCode;

    }

    public function getUserName() {return $this->userName;}
    public function getPassword() {return $this->password;}
    public function getPageUserName() {return $this->pageUserName;}
    public function getLastName1() {return $this->lastName1;}
    public function getLastName2() {return $this->lastName2;}
    public function getEmail() {return $this->email;}
    public function getPhoneNumber() {return $this->phoneNumber;}
    public function getAreaCode() {return $this->areaCode;}

  }
?>
