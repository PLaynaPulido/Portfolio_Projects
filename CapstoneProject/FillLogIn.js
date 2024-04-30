//Capstone Project Pablo Layna
//FillLogin.js
const emailInput = document.getElementById('email'); //IDs of inputs are assign to variables.
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');

emailInput.addEventListener('input', toggleLoginButton); //When user inputs the required information in the input field, toggleSaveChangesButton() is called.
passwordInput.addEventListener('input', toggleLoginButton);

function toggleLoginButton() { //If all fields are valid, button will be availabe. If not, button will be still disabled.
  if (emailInput.checkValidity() && passwordInput.checkValidity()) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}
