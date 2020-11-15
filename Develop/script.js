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

//




var userOptions = ["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
var userPassword = ''

var isUpperscase = confirm("Do you want to inlcude Upper-Case letters?")
var isNumbers = confirm("Do you want to inlcude Numbers?")
var isSpecials = confirm("Do you want to inlcude special characters?")

var userQueries = [true, isUpperscase, isNumbers, isSpecials]

//turn this into a function
for (var i = 0; i < userQueries.length; i++) {
  if (userQueries[i]) {
    userPassword = userPassword + userOptions[i]
  }
}

alert(userPassword)


