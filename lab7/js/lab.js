/**
 * Author:    Arlo
 * Created:   11.05.2009
 *
 * License:   Public Domain
 **/

 // Define Variables
 //sortUserName - a function that takes user input and sorts the letters of their name
 function sortUserName() {
    var userName = window.promt ("Whats your name?");
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
  sortUserName(), "</br>")
