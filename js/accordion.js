// It is always helpful to use comments in your code!
var accordionHeaders = document.querySelectorAll('#accordion .accordion-headers');
//console.log(accordionHeaders);
var accordionDescriptions = document.querySelectorAll('#accordion .accordion-description');


// Handles the accordion dropdown action
function expandAccordionDescription() {
//  console.log('function works!');
//console.log(this.childNodes[3]);

  //Handles the toggle indicator
  for (i = 0; i < accordionHeaders.length; i++)  {
    accordionHeaders[i].childNodes[3].innerHTML = '+';
    accordionDescriptions[i].classList.remove('accordion-open');
  }

  this.nextElementSibling.classList.toggle('accordion-open');
  this.childNodes[3].innerHTML = '-';



}
//Add click event listener for accordion headers
for (i = 0; i < accordionHeaders.length; i++) {
  //console.log(accordionHeaders[i]);
  accordionHeaders[i].addEventListener('click', expandAccordionDescription);
}
