// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// basic building blocks to be improved for final submission

// setting up variables
function generatePassword() {

var userOptions = ["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
var userPasswordpossibles = ''
var userPassworddisplayed = ''

// digits must be from 8 to 128, gotta check and force the issue if they fail to do this
var passwordLength = prompt("How many digits (please enter a number from 8 to 128)?")

//check if the desired length is in set parameters
if (passwordLength < 8 || passwordLength > 128) {
  for (passwordLength; passwordLength < 8 || passwordLength > 128; passwordLength = prompt("Your password must be a number from 8 to 128. Please try again: how long do you want your password to be?")) {    
  }
}

//confirm each question regarding what characters to use in password
var isLowercase = confirm("Do you want to inlcude Lower-Case letters?")
var isUpperscase = confirm("Do you want to inlcude Upper-Case letters?")
var isNumbers = confirm("Do you want to inlcude Numbers?")
var isSpecials = confirm("Do you want to inlcude special characters?")

var userQueries = [isLowercase, isUpperscase, isNumbers, isSpecials]

//loops through each boolean as to whether or not to include that same index within the available sets of chars
for (var i = 0; i < userQueries.length; i++) {
  if (userQueries[i]) {
    userPasswordpossibles = userPasswordpossibles + userOptions[i]
  }
}


//if user fails to make any selections for possible characters, return an error message.
if (userPasswordpossibles.length === 0) {
  password = "You must make positive selections! Click the button to start again."
  return password;
}

//creates the password. Random number must be multiplied by the length of the string of possible chars, then rounded to a whole number, then appended to the final password.
//turn this into a function
for (var i = 0; i < passwordLength; i++) {
  var newPasswordchar = userPasswordpossibles.charAt(Math.round(Math.random() * userPasswordpossibles.length))
  userPassworddisplayed = userPassworddisplayed + newPasswordchar;
}

//translate to desired var
password = userPassworddisplayed

//final product
return password;
}