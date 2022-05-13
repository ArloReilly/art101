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

   //sortUserName - a function that takes user input and sorts the letters of their name
   function sortUserName() {
      var userName = window.promt("Whats your name?");
      console.log("userName =", userName);
      //split string to array
      var nameAray = userName.split('');
      console.log("nameArray =", nameArray);
      //sort the array
      var nameArraySort = nameArray.sort();
      console.log("nameArraySort =", nameArraySort);
      //join array back to a string
      var nameSorted = nameArraySort.join('');
      console.log("nameSorted =", nameSorted);
      // username.toLower().split('').sort().join("")
      return nameSorted;
   }

  // output
  document.writeln("Oh hey, I've fixed your name: ",
    sortUserName(), "</br>");

});
