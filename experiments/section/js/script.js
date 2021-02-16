// var nameVar = "Alejandro";
// var numVar = 5;
// numVar = 25;
//
// function myfirstFunction() {
//   console.log("this is my first function!!");
// }
// //myfirstFunction();
//
// function comparingNumbers(firstNum, secondNum) {
//   console.log("First Number: " + firstNum + " Second Number: " + secondNum);
//   console.log("First Number is greater than second Number: " + (firstNum > secondNum));
//   console.log(numVar);
//   numVar += 3;
// }
// comparingNumbers(1, 2);
// numVar += 40;
// comparingNumbers(12, 18);

var userFirst = window.prompt("What is your first name?");
var userLast = window.prompt("What about your last name?");

// Anon function that has the name userName that takes first name and last name
// as parameters and returns a text with the names
var userInfo = function(firstName, lastName) {
  return("Nice to meet you, " + firstName + " " + lastName + "!");
}

console.log(userInfo(userFirst, userLast));
