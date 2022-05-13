/**
 * Author:    Arlo
 * Created:   11.05.2009
 *
 * License:   Public Domain
 **/

document.getElement("my-button").addEventListener("click", sortUserName);
function sortUserName() {
  document.getElementById("output").inner = Date();
}

//lab7

function sortUserName() {
  var userName = window.prompt("Id just love to know and fix your name")
  consoel.log("userName =", userName);

  //split string to array

  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  //sort array

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort=", nameArraySort);

  //join array and string back together

  var nameSorted = nameArraySorted.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

//Output

document.writeln("Yo yo yo! Well looky I made your name better, "
  sortUserName(), "</br>");






 
