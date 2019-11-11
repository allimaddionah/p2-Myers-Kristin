var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

//Code Dealing With The API Data Goes Here

var message = document.createTextNode(apiResult.message);

var name = document.querySelector('#API-name span.place1');


name.appendChild(message);



console.log(name);





}
};
xmlhttp.open('GET', 'https://dog.ceo/api/breeds/list/all', true);
xmlhttp.send();
