//Starting logic for the password generator
//To get us started, we are given the assignment code to help declare variables 
//Then we start with our keyword actions, in this case, If Else statements
//A user will click generate password and be given prompts to fulfill a criteria for acceptable password strength

// Assignment Code - We assign or select the button to generate an action
var generateBtn = document.querySelector("#generate");

// Set up string references for password criteria to prepare app for all (permissible) possible combinations 
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*~";
var password = "";
var allowed = "password";

// Add event listener to generate button, placed after strings to follow chronological logic
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
//Now we tell our javascript what to do with the above information
//length prompt appears asking user to select a password character length
//if user chooses a charcter length between 8 and 128 they can continue
//if user does not choose a character length between 8 and 128 they are prompted to try again

function writePassword() {
  var password = generatedPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  var passwordLength = window.prompt("Enter a number between 8 - 128 characters:");
    if (!passwordLength) {
        window.alert("Please choose a number between 8 - 128 characters. Please try again.");
        return;
    }
    else if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Please choose a number between 8 - 128 characters. Please try again.");
        return;
      }
    else if(isNaN(passwordLength)){
        window.alert("Please choose a number not a character. Please try again");
        return;
      }
    else if (passwordLength > 8 || passwordLength < 128) {
        window.alert("Please choose a number between 8 - 128 characters. Please try again.");
        console.log(passwordLength);
    }
function generatedPassword (){
    if (document.generator.upperCase.checked) {
        allowed = allowed + upperCase;
    }
    if (document.generator.lowercase.checked) {
        allowed = allowed + lowercase;
    }
    if (document.generator.numbers.checked) {
        allowed = allowed + numbers;
    }
    if (document.generator.symbols.checked) {
        allowed = allowed = symbols;
    };

    for (var i = 0; i < length; i++) {
        var random = Math.flow(Math.random() * allowed.length);
        password += allowed[random]
    };
    return password
    //officially not sure why this is not working 