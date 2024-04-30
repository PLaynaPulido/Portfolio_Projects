//Capstone Project Pablo Layna
//scriptPassword.js
var input = document.getElementById("password"); //IDs of texts are assign to variables.
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var special = document.getElementById("special");

input.onkeyup = function() { //Gets input text of variable from password input field
  var upperCaseLetter = /[A-Z]/g; //If password contains an upper case letter, class invalid will be removed and valid class will be added to change text's color to green.
  if(input.value.match(upperCaseLetter)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }
  var numbers = /[0-9]/g; //If password contains a digit, class invalid will be removed and valid class will be added to change text's color to green.
  if(input.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  if(input.value.length >= 8) { //If password length is 8 character or more, class invalid will be removed and valid class will be added to change text's color to green.
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
  var specialChar = /[-@!?$#]/g; //If password contains a special character, class invalid will be removed and valid class will be added to change text's color to green.
  if(input.value.match(specialChar)) {
    special.classList.remove("invalid");
    special.classList.add("valid");
  } else {
    special.classList.remove("valid");
    special.classList.add("invalid");
  }
}
