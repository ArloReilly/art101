/**
 * Author:    Arlo
 * Created:   11.05.2009
 *
 * License:   Public Domain
 **/


 var buttonEl = document.getElementById("my-button");
 console.log("Button:", buttonEl);

 // Create an event handler within the JS file that listens for a button click.
 buttonEl.addEventListener("click", function(){
 	console.log("Click");
 	// prompt the user to input their name with the prompt() function.
 	//var name = window.prompt("What is your name?");
   var inputEl = document.getElementById("my-input");
   var name = inputEl.value;
   console.log("name:", name);
 	// Use this input to change the text from ‘Heyyyyooo!’ to ‘yo yo yo’ + the user’s name
   // Find the element
 	var goodbyeWorld = document.getElementById("title");
   console.log("title:", goodbyeWorld);
   goodbyeWorld.innerHTML = "Yo yo yo, " + name;

});
