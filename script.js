//Starting logic for the password generator
//To get us started, we are given the assignment code to help declare variables 
//Then we start with our keyword actions, in this case, If Else statements
//A user will click generate password and be given prompts to fulfill a criteria for acceptable password strength

// Assignment Code - We assign or select the button to generate an action
var generateBtn = document.querySelector("#generate");

// Set up strings for password criteria
var alphabetString = "abcdefghijklmnopqrstuvwxyz";
var numberString = "0123456789";
var specialCharString = "!@#$%^&*~";

// Add event listener to generate button, placed after strings to follow chronological logic
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Now we tell our javascript what to do with the above information

