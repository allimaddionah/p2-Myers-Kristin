var popup = document.querySelector(".popup");
var closeButton = document.querySelector(".close-button");

function togglepopup() {
     popup.classList.toggle("show-popup");
}
window.onload = setTimeout(togglepopup, 3000);


function closebutton() {
	popup.classList.remove('show-popup');
}
