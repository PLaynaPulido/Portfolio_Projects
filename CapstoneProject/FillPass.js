//Capstone Project Pablo Layna
//FillPass.js
const passwordInput = document.getElementById('password'); //IDs of inputs are assign to variables.
const confirmPasswordInput = document.getElementById('corfirmPassword');
const loginButton = document.getElementById('pass-button');

passwordInput.addEventListener('input', toggleLoginButton); //When user inputs the required information in the input field, toggleSaveChangesButton() is called.
confirmPasswordInput.addEventListener('input', toggleLoginButton);

function toggleLoginButton() { //If all fields are valid, button will be availabe. If not, button will be still disabled. It also check is password text is equal to confirm password text.
  if (passwordInput.checkValidity() && confirmPasswordInput.checkValidity() && passwordInput.value === confirmPasswordInput.value) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}
