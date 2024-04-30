//Capstone Project Pablo Layna
//scriptCapstone.js
let GoToTopButton = document.getElementById("GoTopButton"); //ID of button is assign to variable.

window.onscroll = function() {scrollFunction()}; //If user scrolls in the web page, scrollFunction() is called

function scrollFunction() { //If the scroll position is greater than 70 pixels from the top of the web page, the GoToTopButton element's display property is set to "block", making the button visible. If the scroll position is less than or equal to 70 pixels from the top, the GoToTopButton element's display property is set to "none", making the button hide.
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    GoToTopButton.style.display = "block";
  } else {
    GoToTopButton.style.display = "none";
  }
}
function GoBackToTop() { //Goes back to top when go to top button is clicked.
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
