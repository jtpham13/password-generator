// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
    
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// added function
function generatePassword(){
  var passwordLength = prompt("This password needs to be between 8 and 128 characters. How many characters do you wish to have?")

  if (passwordLength < 8 || passwordLength > 128) {
       prompt("Password length doesn't meet criteria. Please enter valid length")     
    } 

    var lowercaseChoice = confirm("Do you want to include lowercase letters?")
    console.log(lowercaseChoice)
    var uppercaseChoice = confirm("Do you want to include uppercase letters? ")
    var numericChoice = confirm("Do you want to include numberic characters?")
    var specialCharactersChoice = confirm("Do you want to include special characters?")
    

    var passwordString =""
    var testString = ""
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = lowercase.toUpperCase();
          // console.log("uppercase;",uppercase)
    var numeric = "0123456789";
    var specialCharacters = "!@#$%^&*()><";

    if(lowercaseChoice){
      testString += lowercase
    }
    if(uppercaseChoice){
      testString += uppercase
    }
    if(numericChoice){
      testString += numeric
    }
    if(specialCharactersChoice){
      testString += specialCharacters
    }
    var testStringArr= testString.split("")
    // console.log(testStringArr)

// for(var i = 0; testStringArr.length; i=++)
  
// for loop to make random password
  for( var i = 0; i <=passwordLength; i++){
    var randomIndex = Math.floor(Math.random()*testStringArr.length)
  var randomChar = testStringArr[randomIndex]
  console.log(randomChar)
  passwordString+=randomChar
  }
  console.log(passwordString)
  return passwordString
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
