// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  password = "password";
  // TODO: add code to generate the password here
  var password = "";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChars = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var candidates = "";
  var length = 0;
  var includeLower = false;
  var includeUpper = false;
  var includeSpecial = false;
  var includeNumber = false;
  var letter = "";
  length = prompt("Enter password length");
  if (length < 8) {
    alert("Password should be from 8 to 128 characters long");
  } else if (length > 128) {
    alert("Password should be from 8 to 128 characters long");
  }
  includeLower = confirm("Use lowercase letters?");
  if (includeLower === true) {
    var letter = candidates + lowercase;
    for (var i = 0; i <= letter; i++) {
      var randomNumber = Math.floor(Math.random() * letter.length);
      password += chars.substring(randomNumber, randomNumber +1);
    }
    return password = password + letter;
  }
  includeUpper = confirm("Use uppercase letters?");
  if (includeUpper === true) {
    var letter2 = candidates + uppercase;
    for (var i = 0; i <= letter2; i++) {
      var randomNumber = Math.floor(Math.random() * letter2.length);
      password += chars.substring(randomNumber, randomNumber +1);
    }
    return password = password + letter2;
  }
  includeSpecial = confirm("Use special characters?");
  if (includeSpecial === true) {
    var letter3 = candidates + specialChars;
    for (var i = 0; i <= letter3; i++) {
      var randomNumber = Math.floor(Math.random() * letter3.length);
      password += chars.substring(randomNumber, randomNumber +1);
    }
    return password = password + letter3;
  }
  includeNumber = confirm("Use numbers?");
  if (includeNumber === true) {
    var letter4 = candidates + numbers;
    for (var i = 0; i <= letter4; i++) {
      var randomNumber = Math.floor(Math.random() * letter4.length);
      password += chars.substring(randomNumber, randomNumber +1);
    }
    return password = password + letter4;
  }
  if (candidates.length === 0) {
    alert("You must choose at least one character type.");
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
