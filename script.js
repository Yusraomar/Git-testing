// Event - Listens for specific events to create interactive web pages
// events: click, mouseover, mouseout
//   .add.eventListener(event, callback); call back means the function we are executing 
const myBox = document.getElementById("myBox");

function changeColor(event){ // making a function for adding the event listener 
clearEvent.target.style.backgroundColor = "tomato"
event.target.textContent = "Got You! 😁"
console.log(event);
}

myBox.addEventListener("click", changeColor); //name of variable myBox . addEventListener, then you choose which event click, on mouse etc then the name of the function