//Capstone Project Pablo Layna
//SellYourCarFill2.js
const fillAllInput = document.getElementById('filloutinfo'); //IDs of inputs are assign to variables.
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('address');
const cityInput = document.getElementById('city');
const zipCodeInput = document.getElementById('zipCode');
const phoneNumberInput = document.getElementById('phoneNumber');
const nextButton = document.getElementById('next-button');

fillAllInput.addEventListener('input', toggleNextButton); //When user inputs the required information in the input field, toggleNextButton() is called.
firstNameInput.addEventListener('input', toggleNextButton);
lastNameInput.addEventListener('input', toggleNextButton);
emailInput.addEventListener('input', toggleNextButton);
addressInput.addEventListener('input', toggleNextButton);
cityInput.addEventListener('input', toggleNextButton);
zipCodeInput.addEventListener('input', toggleNextButton);
phoneNumberInput.addEventListener('input', toggleNextButton);

function toggleNextButton() { //If all fields are valid, button will be availabe. If not, button will be still disabled.
  if (firstNameInput.checkValidity() && lastNameInput.checkValidity() && emailInput.checkValidity() && addressInput.checkValidity() && cityInput.checkValidity() && zipCodeInput.checkValidity() && phoneNumberInput.checkValidity()){
    nextButton.disabled = false;
  }
  else if (fillAllInput.checkValidity()) { //If filloutinfo checkbox is active, button will be availabe. If not, button will be still disabled.
    nextButton.disabled = false;
  } else {
    nextButton.disabled = true;
  }
}
