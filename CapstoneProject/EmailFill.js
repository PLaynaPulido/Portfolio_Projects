//Capstone Project Pablo Layna
//EmailFillFill.js
const emailInput = document.getElementById('email'); //IDs of inputs are assign to variables.
const sendButton = document.getElementById('send-button');

emailInput.addEventListener('input', toggleNextButton); //When user inputs the required information in the input field, toggleSaveChangesButton() is called.

function toggleNextButton() {
  if (emailInput.checkValidity()){ //If all fields are valid, button will be availabe. If not, button will be still disabled.
    sendButton.disabled = false;
  }
  else {
    sendButton.disabled = true;
  }
}
