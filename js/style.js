var popup = document.querySelector(".popup");
var closeout = document.querySelector(".closeout");
var closeButton = document.querySelector(".close-button");

window.addEventListener('load', function () {
	popup.classList("show-popup");
}, true);

function togglepopup() {
     popup.classList.toggle("show-popup");

}

function windowOnClick(event) {
    if (event.target === popup) {
        togglepopup();
    }
}

closeout.addEventListener("click", togglepopup);
closeButton.addEventListener("click", togglepopup);
window.addEventListener("click", windowOnClick);
