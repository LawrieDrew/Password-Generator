//Starting logic for the password generator
//To get us started, we are given the assignment code to help declare variables 
//Then we start with our keyword actions, in this case, If Else statements
//A user will click generate password and be given prompts to fulfill a criteria for acceptable password strength

// Assignment Code - We assign or select the button to generate an action
var generateBtn = document.querySelector("#generate");

// Set up string references for password criteria to prepare app for all (permissible) possible combinations 
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*~";

// Add event listener to generate button, placed after strings to follow chronological logic
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Now we tell our javascript what to do with the above information

var generatePassword = function() {
 //We have to set password to nothing at first to start from scratch. Password is empty space we can add a value to
var password = []
}
//length prompt appears asking user to select a password character length
var passwordLength = [];
//if user chooses a charcter length between 8 and 128 they can continue
if (passwordLength => 8 && passwordLength =< 126); {

    console.log(passwordLength);
}
//if user does not choose a character length between 8 and 128 they are prompted to try again

"Please select a character length between 8 and 126 and try again!"
//number checkboxes: if user wants to use a number in their password they can elect to do so
//special character checkboxes: if user wants to utilize special characters in their password they can elect to do so
//run checks to make sure all criteria are correct lest the action bounce back to square one
=== statements to confirm  all 
//randomizer takes password "recipe" and mixes it
generate random code
//spits password back out to user!

