//Capstone Project Pablo Layna
//SellYourCarFill1.js
const carNameInput = document.getElementById('carName'); //IDs of inputs are assign to variables.
const modelInput = document.getElementById('model');
const yearInput = document.getElementById('year');
const classInput = document.getElementById('class');
const totalMilesInput = document.getElementById('totalMiles');
const initialPriceInput = document.getElementById('initialPrice');
const uploadButton = document.getElementById('upload');
const nextButton = document.getElementById('next-button');

carNameInput.addEventListener('input', toggleNextButton); //When user inputs the required information in the input field, toggleNextButton() is called.
modelInput.addEventListener('input', toggleNextButton);
yearInput.addEventListener('input', toggleNextButton);
classInput.addEventListener('input', toggleNextButton);
totalMilesInput.addEventListener('input', toggleNextButton);
initialPriceInput.addEventListener('input', toggleNextButton);
uploadButton.addEventListener('change', toggleNextButton);

function toggleNextButton() { //If all fields are valid, button will be availabe. If not, button will be still disabled.
  if (carNameInput.checkValidity() && modelInput.checkValidity() && yearInput.checkValidity() && classInput.checkValidity() && totalMilesInput.checkValidity() && initialPriceInput.checkValidity() && uploadButton.value) {
    nextButton.disabled = false;
  } else {
    nextButton.disabled = true;
  }
}
