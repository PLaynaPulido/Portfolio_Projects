//Capstone Project Pablo Layna
//EAddressFill.js
const addressInput = document.getElementById('address'); //IDs of inputs are assign to variables.
const cityInput = document.getElementById('city');
const zipCodeInput = document.getElementById('zipCode');
const saveChangesButton = document.getElementById('EAddress-button');

addressInput.addEventListener('input', toggleSaveChangesButton); //When user inputs the required information in the input field, toggleSaveChangesButton() is called.
cityInput.addEventListener('input', toggleSaveChangesButton);
zipCodeInput.addEventListener('input', toggleSaveChangesButton);

function toggleSaveChangesButton() { //If all fields are valid, button will be availabe. If not, button will be still disabled.
  if (addressInput.checkValidity() && cityInput.checkValidity() && zipCodeInput.checkValidity()) {
    saveChangesButton.disabled = false;
  } else {
    saveChangesButton.disabled = true;
  }
}
