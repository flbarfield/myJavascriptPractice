//// Minimum ////

//always finds minimum number and logs it
function min (num1, num2) {
  console.log(num1 < num2 ? num1 : num2);
}

//// Recursion ////

/*
  Basically calls the function again and again subtracting two or
  cancelling out a negative until the number is finally a 0 or a 1
*/

function isEven (num) {
  if (num === 0) {
    console.log(true);
  } else if (num === 1) {
    console.log(false);
  } else if (num < 0){
    return isEven(-num);
  } else {
    return isEven(num-2);
  }
}

/// Bean Counting ///

function countBs (inString) {
  count = 0;
  for (var i = 0; i < inString.length; i++) {
    if (inString.charAt(i) === "B") {
      count += 1;
    }
  }
  console.log(count);
}

function countChar (inString, inChar) {
  count = 0;
  for (var i = 0; i < inString.length; i++) {
    if (inString.charAt(i) === inChar) {
      count += 1;
    }
  }
  console.log(count);
}
