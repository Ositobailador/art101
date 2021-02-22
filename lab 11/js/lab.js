/**
 * Assignment: Lab 11 - Libraries and jQuery
 * Author:    Alejandro and Gillian
 * Created:   02.16.2021
 *
 * Licensed: MIT
**/

// appends button elements under every paragraph element
$("p").append("<br> <button>");

// label all button elements within a paragraph element to "click me"
$("button").html("Click Me!");

// assign button elements to variables
var button1El = $("#challenges button");
console.log(button1El);
var button2El = $("#problems button");
console.log(button2El);
var button3El = $("#results button");
console.log(button3El);

// toggles class special from css into the challenges section
// changes background-color of another button element
// changes its own background-color to none
$(button1El).click(function() {
  $("#challenges").toggleClass("special");
  $(button2El).css("background-color", "pink");
  $(button1El).css("background-color", "initial");
})

// toggles class special from css into the problems section
// changes background-color of another button element/changes its own background
// - color to none
$(button2El).click(function () {
  $("#problems").toggleClass("special");
  $(button3El).css("background-color", "dodgerblue");
  $(button2El).css("background-color", "initial");
})

// toggles class special from css into the results section
// changes background-color of another button element/changes its own background
// - color to none
$(button3El).click(function () {
  $("#results").toggleClass("special");
  $(button1El).css("background-color", "lightgreen");
  $(button3El).css("background-color", "initial");
})
