<?php

class Connection {

  // DataBase credencials
  private static $DBservername = "mysql_db";
  private static $DBusername = "xsaco07";
  private static $DBpassword = "Vivalas1";
  private static $DBname = "lab3DB";
  private static $DBconnection;

  public static function connect() {

      // Stablish connection
      self::$DBconnection = new mysqli(self::$DBservername, self::$DBusername, self::$DBpassword, self::$DBname);

      if (self::$DBconnection->connect_error) {
          die("Connection failed: " . self::$DBconnection->connect_error);
      }

      //echo "Connected successfully to server";
      return self::$DBconnection;
  }

}

?>
