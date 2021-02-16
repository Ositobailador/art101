/**
 * Author:    Alejandro Silva
 * Created:   02.09.2021
 *
 * Licensed: MIT
**/

// create a div element that has id="div_1" and text that says "this is annoying"
var divEl = document.getElementById("div_1");
divEl.innerHTML = "this is annoying<br>";

// console.log that text
console.log(divEl.innerHTML);

// add a button
var buttonEl = document.createElement("button");
document.body.appendChild(buttonEl);
buttonEl.innerHTML = "Press Me!"

// change the text from this is annoying into "this is more annoying than I thought!"
// when clicking the button
buttonEl.onclick = function() {
  divEl.innerHTML = "this is even more annoying";
}
