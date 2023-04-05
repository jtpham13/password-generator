// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
    
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passwordLength = prompt("This password needs to be between 8 and 128 characters. How many characters do you wish to have?")
    if (passwordLength < 8 || passwordLength > 128) {
      return
    }

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "";
  var numberic = "";
  var specialCharacters = "";

  var lowercaseChoice = confirm("Do you want to include lowercase letters?")
  var uppercaseChoice = confirm("Do you want to include uppercase letters? ")

  
  return passwordLength
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
