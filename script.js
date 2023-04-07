// Assignment Code
var generateBtn = document.querySelector("#generate");

// Characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ".", "?", ",", "+", "=", "-", ";"];
var chosenChars = [];
var randomPassword = [];
var length = 0;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate password
function generatePassword() {
  chooseChars();
  chooseLength();
  fillPassword();
  console.log(randomPassword.length);
  var passwordAsString = randomPassword.join("");
  randomPassword.length = 0;
  return passwordAsString;
}

// Choose which characters to use based on user input
function chooseChars() {
  // Ask about lowercase
  if (window.confirm("Do you want to have lowercase letters in your password?")) {
    chosenChars = chosenChars.concat(lowercase);
  }
  // Ask about uppercase
  if (window.confirm("Do you want to have uppercase letters in your password?")) {
    chosenChars = chosenChars.concat(uppercase);
  }
  // Ask about numbers
  if (window.confirm("Do you want to have numbers in your password?")) {
    chosenChars = chosenChars.concat(numbers);
  }
  // Ask about special characters
  if (window.confirm("Do you want to have special characters in your password?")) {
    chosenChars = chosenChars.concat(specialChars);
  }
}

// Choose password length based on user input
function chooseLength() {
  length = window.prompt("Choose a length for your password between 8 and 128.");
  checkLength();
}

// Check that length is a number between 8 and 128
function checkLength() {
  if (length >= 8 && length <= 128) {
    
  } else {
    window.alert("Invalid input! Please enter a number between 8 and 128.");
    chooseLength();
  }
}

// Add a random character to the end of the password until it is the desired length
function fillPassword() {
  for (var i = 0; i < length; i++) {
    let idx = Math.floor(Math.random() * chosenChars.length);
    randomPassword.push(chosenChars[idx]);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
