//Capstone Project Pablo Layna
//SignFill.js
const firstNameInput = document.getElementById('firstName'); //IDs of inputs are assign to variables.
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('address');
const cityInput = document.getElementById('city');
const zipCodeInput = document.getElementById('zipCode');
const phoneNumberInput = document.getElementById('phoneNumber');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('corfirmPassword');
const termsAndConditionsInput = document.getElementById('termsandconditions');
const signUpButton = document.getElementById('sign-button');

firstNameInput.addEventListener('input', toggleSignUpButton); //When user inputs the required information in the input field, toggleSaveChangesButton() is called.
lastNameInput.addEventListener('input', toggleSignUpButton);
emailInput.addEventListener('input', toggleSignUpButton);
addressInput.addEventListener('input', toggleSignUpButton);
cityInput.addEventListener('input', toggleSignUpButton);
zipCodeInput.addEventListener('input', toggleSignUpButton);
phoneNumberInput.addEventListener('input', toggleSignUpButton);
passwordInput.addEventListener('input', toggleSignUpButton);
confirmPasswordInput.addEventListener('input', toggleSignUpButton);
termsAndConditionsInput.addEventListener('input', toggleSignUpButton);


function toggleSignUpButton() { //If all fields are valid, button will be availabe. If not, button will be still disabled. It also check is password text is equal to confirm password text.
  if (firstNameInput.checkValidity() && lastNameInput.checkValidity() && emailInput.checkValidity() && addressInput.checkValidity() && cityInput.checkValidity() && zipCodeInput.checkValidity() && phoneNumberInput.checkValidity() && passwordInput.checkValidity() && confirmPasswordInput.checkValidity() && termsAndConditionsInput.checkValidity() && passwordInput.value === confirmPasswordInput.value) {
    signUpButton.disabled = false;
  } else {
    signUpButton.disabled = true;
  }
}
