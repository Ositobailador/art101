/**
 * Assignment: Lab 13 - Loops
 * Author:    Alejandro and Gillian
 * Created:   02.23.2021
 *
 * Licensed: MIT
**/

// anon function when button is clicked
$("#my-button").click(function() {

  // gets value of an input and assigns it to a var maxNum
  var maxNum = $("#max").val();
  console.log(maxNum);

  // gets values of the three inputs with the specific factors they want and assigns
  // each to its own var
  var fact1 = $("#factor1").val()
  console.log(fact1);
  var fact2 = $("#factor2").val()
  console.log(fact2);
  var fact3 = $("#factor3").val()
  console.log(fact3);
  var fact4 = $("#factor4").val()
  console.log(fact4);

  // gets values of the three inputs with specific texts they want and assigns
  // each to its own var
  var t1 = $("#text1").val()
  console.log(t1);
  var t2 = $("#text2").val()
  console.log(t2);
  var t3 = $("#text3").val()
  console.log(t3);
  var t4 = $("#text4").val()
  console.log(t4);

  // declare a new var everytime the function is called
  var outputStr = "";

  //
  for (var num = 0; num <= maxNum; num++) {
    if (num == 0) {
      outputStr += "<b>" + num + " - Start!!</b><br>";
    }
    else if (num % (fact1 * fact2) == 0) {
      outputStr += num + " - " + t1 + t2 + "<br>";
    }
    else if (num % (fact1 * fact3) == 0) {
      outputStr += num + " - " + t1 + t3 + "<br>";
    }
    else if (num % (fact1 * fact4) == 0) {
      outputStr += num + " - " + t1 + t4 + "<br>";
    }
    else if (num % (fact2 * fact3) == 0) {
      outputStr += num + " - " + t2 + t3 + "<br>";
    }
    else if (num % fact1 == 0) {
      outputStr += num + " - " + t1 + "<br>";
    }
    else if (num % fact2 == 0) {
      outputStr += num + " - " + t2 + "<br>";
    }
    else if (num % fact3 == 0) {
      outputStr += num + " - " + t3 + "<br>";
    }
    else if (num % fact4 == 0) {
      outputStr += num + " - " + t4 + "<br>";
    }
    else {
      outputStr += num +"<br>";
    }
  }
  $("#output").html(outputStr);
})
