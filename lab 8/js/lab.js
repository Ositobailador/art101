/**
 * Assignment: Lab 8 - Ano Functions and Callbacks
 * Author:    Alejandro and Gillian
 * Created:   02.09.2021
 *
 * Licensed: Public Domain
**/

// testing out a common method that uses a callback
var myVar;
function myStartFunction() {
myVar = setInterval(alertFunc, 2000);
}

function alertFunc() {
  document.getElementById("demo").innerHTML += " Hello";
}

function myStopFunction() {
  clearInterval(myVar);
}

// first function
function firstThing(test) {
  console.log(test + ": This is the first thing.<br>");
}

// second function
function secondThing(test) {
  console.log(test + ": This is the second thing.<br>");
}

// third function
function thirdThing(test) {
  console.log(test + ": This is the third thing.<br>");
}

// Test 1: calling all functions
firstThing("Test 1");
secondThing("Test 1");
thirdThing("Test 1");

// Test 2: calling all functions with setTimeout and an anon function
setTimeout(function() {
  firstThing("Test 2");
}, 0);
setTimeout(function() {
  secondThing("Test 2");
}, 0);
setTimeout(function() {
  thirdThing("Test 2");
}, 0);

// Test 3: same as test 2 but with adjusted times to print the following order: 2,3,1
setTimeout(function() {
  firstThing("Test 3");
}, 3000);
setTimeout(function() {
  secondThing("Test 3");
}, 1000);
setTimeout(function() {
  thirdThing("Test 3");
}, 2000);
