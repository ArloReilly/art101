/**
 * Author:    Arlo with refrences from Wes Modes
 * Created:   11.05.2009
 *
 * License:   Public Domain
 **/
//given a number and an object that looks like this:
// 3: "snap", 5: "crackle" 7: "Pop"
//loops over the numbers and outputs the number and the matching text for factors
function snapCracklePop(maxNums, factorObj){
  //iterate ver all of out numbers
  for (var num=0; num<maxNums; num++) {
//reset output string
var outputStr = "";
//iterate over the factors we got from HTML
for (var factor in factorObj){
  //check and see if num is a multiple of factor
  if (num % factor == 0){

//if yes than add text to output string
outputStr += factorObj[factor];
}
}
//now if we have words in outputStr, format is like this, "SnapCrackle!"
if (outputStr) {
  outputStr = " - " + outputStr + "!";
}
outputToPage(num.toString() + outputStr)
}
function reportError(str){
  outputEl.innerHTML = "<div class= 'error'>" + str + "</div";
}

document.getElementById("submit").addEventListner("click", function() {
  var max = document.getElementById("max").value;
  console.log("max", max)
  if (! max) {
    reportError("You gotta gimme a max");
  }
