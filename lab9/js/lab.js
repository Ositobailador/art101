/**
 * Assignment: Lab 9 - JavaScript for the Web
 * Author:    Alejandro and Gillian
 * Created:   02.09.2021
 *
 * Licensed: MIT
**/

// Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById("output");

// Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El = document.createElement("p")

// Change the html attribute of new1El to say something new.
new1El.innerHTML = "Say something new";

// Create another new element and assign it to a variable new2El
var new2El = document.createElement("p");

// Change the html attribute of new2El to say something else.
new2El.innerHTML = "Say something else";

// Append both new elements one at a time using appendChild() to your output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the css attributes of at least two elements of your page
document.getElementById("title").style.border = "thick solid #6a00b5";
document.getElementById("title").style.outline = "thick dashed red";
document.getElementById("title").style.textAlign = "center";

// create a new element amd incert it at the top of an element
var new3El = document.createElement("p");
outputEl.insertBefore(new3El, outputEl.firstChild);
new3El.id = "para";

// setting the page's backgrounf color to pink
document.body.style.backgroundColor = "#ffa3dd";

// inserts the url of the page in the p tag with id "para"
var urlEl = document.URL;
document.querySelector("#para").innerHTML = urlEl;

// create button and append it under outputEl
var buttonEl = document.createElement("button");
buttonEl.innerText = "Press to move the URL!";
outputEl.appendChild(buttonEl);

// move position of new3El under new2El after clicking button
buttonEl.onclick = function() {
  new2El.insertAdjacentElement("afterend", new3El);
}
