/**
 * Author:    Arlo
 * Created:   11.05.2009
 *
 * License:   Public Domain
 **/

//using getElementById() to get the output id from the index file
let outputEl = document.getElementById('output');

//ocreating a new element assigning it to new1El and changing its html
let new1El = document.createElement('p');
new1El.innerHTML = 'Do you ever feel';

// creating another new element and assigning it to new2El and changing its html
let new2El = document.createElement('p');
new2El.innerHTML = 'Like a plastic bag';

// appending new1El and new2El to outputEl
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//editing the css using JS
document.getElementById('Challenge').style.color= '#a56d1d';
document.getElementById('Problems').style.color= '#a56d1d';
document.getElementById('Results').style.color= '#a56d1d';
