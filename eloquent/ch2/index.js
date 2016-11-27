///////// Looping a Triangle///////
var count = 0;
var character = "#";

while (count < 7) {
  console.log(character);
  count++;
  character+="#"
}

//This only spits out final iteration of #######
var character = "#";
for (var count = 0; count < 7; count++)
  console.log(character);
  character+="#";

////////// Fizz Buzz//////////////
//print out numebers 1-100
// divisible by 3, "Fizz"
// divisible by 5, "Buzz"
// 3 && 5 FizzBuzz

for (var count=1; count < 100; count++) {
  if (count % 3 === 0  && count % 5 ===0) {
    console.log("FizzBuzz")
  }else if (count % 3 === 0) {
    console.log("Fizz")
  } else if (count%5 === 0){
    console.log("Buzz")
  }
}

//trying with switch...

/*
this doesn't seem to work. Perhaps switch isn't
made to allow calculation within it's case statments
and instead directly checks a value and does something with it
*/

for (var count=1; count < 100; count++) {
  switch(count) {
  case count % 3 === 0  && count % 5 === 0):
    console.log("FizzBuzz");
    break;
  case (count % 3 === 0):
    console.log("Fizz");
    break;
  case (count % 4 === 0):
    console.log("Buzz");
    break;
  }
}

//////////////Chess Board//////////////

/*
  //////breaking it down//////
  size dictates the W and L of grid
  each position of grid is either "#" or space
    size determines how many loops are made
      is position odd or even? Insert character.
      Reverse the rule for next line
*/

/*
  After-Notes:

  This helped me think about what values were remaining static or not.
  It also really helped nail out what term was doing what. Settling down
  and thinking about it with a clear head made me visualize the diagrams
  for what the program was doing.

  If = CONDITIONAL
  while and for = LOOPS

*/

var size = 30;
var count = 0;

while (count < size) {
  // These are needed for tracking inside conditions.
  // Placed here because the values reset after every loop.
  var string = "";
  var num = 0;
  count++;
  // determines if odd pattern is displayed
  if (count % 2 !== 0) {
    while (num < size) {
      num++;
      if (num % 2 !== 0) {
        string += "#";
      } else {
        string += " ";
      }
    }
  } else {
    while (num < size) {
      num++;
      if (num % 2 !== 0) {
        string += " ";
      } else {
        string += "#";
      }
    }
  }
  console.log(string);
}
