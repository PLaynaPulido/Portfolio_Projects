//Capstone Project Pablo Layna
//EUserFill.js
const firstNameInput = document.getElementById('firstName'); //IDs of inputs are assign to variables.
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('phoneNumber');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('corfirmPassword');
const saveChangesButton = document.getElementById('EUser-button');

firstNameInput.addEventListener('input', toggleSaveChangesButton); //When user inputs the required information in the input field, toggleSaveChangesButton() is called.
lastNameInput.addEventListener('input', toggleSaveChangesButton);
emailInput.addEventListener('input', toggleSaveChangesButton);
phoneNumberInput.addEventListener('input', toggleSaveChangesButton);
passwordInput.addEventListener('input', toggleSaveChangesButton);
confirmPasswordInput.addEventListener('input', toggleSaveChangesButton);

  function toggleSaveChangesButton() { //If all fields are valid, button will be availabe. If not, button will be still disabled. It also check is password text is equal to confirm password text.
    if (firstNameInput.checkValidity() && lastNameInput.checkValidity() && emailInput.checkValidity() && phoneNumberInput.checkValidity() && passwordInput.checkValidity() && confirmPasswordInput.checkValidity() && passwordInput.value === confirmPasswordInput.value) {
      saveChangesButton.disabled = false;
    } else {
      saveChangesButton.disabled = true;
    }
  }
