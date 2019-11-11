



var message1 = document.createTextNode('"Benji"');
var message2 = document.createTextNode('"Chipper"');
var message3 = document.createTextNode('"Buster"');
var message4 = document.createTextNode('"Clyde"');
var message5 = document.createTextNode('"Princess"');
var message6 = document.createTextNode('"Jake"');
var message7 = document.createTextNode('"Patch"');
var message8 = document.createTextNode('"Giggles"');


var box1 = document.getElementById('Box1');
var box2 = document.getElementById('Box2');
var box3 = document.getElementById('Box3');
var box4 = document.getElementById('Box4');
var box5 = document.getElementById('Box5');
var box6 = document.getElementById('Box6');
var box7 = document.getElementById('Box7');
var box8 = document.getElementById('Box8');



var placeholder1 = document.getElementById('Placeholder1');
var placeholder2 = document.getElementById('Placeholder2');
var placeholder3 = document.getElementById('Placeholder3');
var placeholder4 = document.getElementById('Placeholder4');
var placeholder5 = document.getElementById('Placeholder5');
var placeholder6 = document.getElementById('Placeholder6');
var placeholder7 = document.getElementById('Placeholder7');
var placeholder8 = document.getElementById('Placeholder8');


//This is e.iii with e.ii.


function showMessage1() {
  placeholder1.appendChild(message1);
  startButton.classList.remove('hide');
}

function showMessage2() {
  placeholder2.appendChild(message2);
  startButton.classList.remove('hide');
}

function showMessage3() {
  placeholder3.appendChild(message3);
  startButton.classList.remove('hide');
}

function showMessage4() {
  placeholder4.appendChild(message4);
  startButton.classList.remove('hide');
}

function showMessage5() {
  placeholder5.appendChild(message5);
  startButton.classList.remove('hide');
}

function showMessage6() {
  placeholder6.appendChild(message6);
  startButton.classList.remove('hide');
}

function showMessage7() {
  placeholder7.appendChild(message7);
  startButton.classList.remove('hide');
}

function showMessage8() {
  placeholder8.appendChild(message8);
  startButton.classList.remove('hide');
}


box1.addEventListener('click', showMessage1);
box2.addEventListener('click', showMessage2);
box3.addEventListener('click', showMessage3);
box4.addEventListener('click', showMessage4);
box5.addEventListener('click', showMessage5);
box6.addEventListener('click', showMessage6);
box7.addEventListener('click', showMessage7);
box8.addEventListener('click', showMessage8);
