
let hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerMenu.addEventListener("click", function () {
	let hamburgerBar = document.querySelector(".bar");
	let nav = document.querySelector(".nav");

	hamburgerBar.classList.toggle("animate");
	nav.classList.toggle("active");



});

// let formButtons = document.querySelectorAll(".form-button");

// for (var i = 0; i < formButtons.length; i++) {
	
// }

function clearInputFields() {
     document.querySelector("#name").value = "";
     document.querySelector("#mail").value = "";
     document.querySelector("#msg").value = "";

     let thankYouNote = document.querySelector(".thank-you-php");
     thankYouNote.classList.add("active");    
}
