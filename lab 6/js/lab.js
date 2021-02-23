/**
 * Assignment: Lab 6 - Arrays and Objects
 * Author:    Alejandro and Gillian
 * Created:   01.31.2021
 *
 * Licensed: Public Domain
 **/

// Define Variables
 var myTransport = ["City Bus", " Core Bus", " Uber", " Zip Car."];

 var myMainRide = {
   make: 'Ford'.fontcolor("blue"),
   model: 'Taurus'.fontcolor("blue"),
   color: 'blue'.fontcolor("blue"),
   year: 2004 .toString().fontcolor("blue"),
   ownIt: true .toString().fontcolor("blue"),
   age: (2021 - 2004) .toString().fontcolor("blue")
 };

// Output
 document.writeln("Getting around with: ".fontcolor("black"), myTransport.toString().fontcolor("black"), "<br>");
 document.writeln("My Main ride: <pre>".fontcolor("black"),
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
