<?php

class Validator{
	public static $OK = 0;
	
	public function __construct(){
		// echo "constructing <br>";
	}

	// Returns $OK or the error message 
	public static function validateAreaCode($string){
		if(! preg_match("/\+\d{3}/", $string)){
			return "Area code must be a '+' and 3 digits but got [$string]";
		}
		return self::$OK;
	}
	

	// Returns $OK or the error message 
	public static function validatePhoneNumber($string){
		if(! preg_match("/\d{8}/", $string)){
			return "Phone number must be 8 digits, but got [$string]";
		}
		return self::$OK;

	}	

	// Returns $OK or the error message 
	public static function validateEmail($string){
		if (!filter_var($string, FILTER_VALIDATE_EMAIL)) {
      		return "Invalid email format: $string"; 
    	}
		return self::$OK;
	}


	// Returns $OK or the error message 
	public static function validatePassword($string){
		// echo "Validating pass \"$string\"";
		// Must contain uppercase, lowecase, and length >= 8
		$len = strlen($string);
		$base = "Error: bad password.";
		if($len < 8){
			return "$base Must have 8+ characters, got $len <br>";
			// return false;
		}
		if( ! preg_match("/[a-z]+/", $string)){
			return "$base Must have lowercase letters";
			// return false;
		}
		if( ! preg_match("/[A-Z]+/", $string)){
			return "$base Must have uppercase letters";
			// return false;
		}
		if( ! preg_match("/\d+/", $string)){
			return "$base Must have digits";
			// return false;
		}
		return self::$OK;


	}

	// Returns $OK or the error message 
	public static function validateUser($user){
		$result = self::$OK;

		$result =  self::validateEmail($user->getEmail());
		if( ! is_integer($result)){
			return $result;
		}

		$result = self::validatePassword($user->getPassword());
		if( ! is_integer($result)){
			return $result;
		}

		$result = self::validatePhoneNumber($user->getPhoneNumber());
		if( ! is_integer($result)){
			return $result;
		}

		$result = self::validateAreaCode($user->getAreaCode());
		if( ! is_integer($result)){
			return $result;
		}
		// echo "validateUser OK<br>";
		return $result;

  	}

}


// echo json_encode(Validator::validateEmail("asdasd"));
// echo Validator::validatePassword("asdasd");
// echo Validator::validatePassword("aAda9d");
// echo Validator::validatePassword("asdasA");
// echo Validator::validatePassword("asdasAasd");
// echo Validator::validatePassword("asdasaasd");
// echo Validator::validatePassword("AAKSDMASD");
// echo Validator::validatePassword("MyPass123");


?>