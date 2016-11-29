//// The Sum of a Range ////

// Returning array containing start to end without the range method (range)
function rangeFunc (start, end) {
  var numList = [];

  for (var i = 0; start < end + 1; i++) {
    numList.push(start);
    start += 1
  }
  console.log(numList)
}

//adds inputted list
function sumList (numList) {
  var listSum = 0;
  var count = 0;
  for (var i = 0; count < numList.length; i++) {
    listSum += numList[count];
    count++
  }
  console.log(listSum)
}

//allowing the use of Step with the function.

// this one works for positive numbers

function bonusRangeFunc (start, end, step) {
  numList = []
  for (var i = 0; start < end + 1; i++) {
    numList.push(start);
    start += step;
  }
  console.log(numList);
}

//book's solution for negatives in mind
// function range(start, end, step) {
//   if (step == null) step = 1;
//   var array = [];
//
//   if (step > 0) {
//     for (var i = start; i <= end; i += step)
//       array.push(i);
//   } else {
//     for (var i = start; i >= end; i += step)
//       array.push(i);
//   }
//   return array;
// }
//
// function sum(array) {
//   var total = 0;
//   for (var i = 0; i < array.length; i++)
//     total += array[i];
//   return total;
// }

//// Reversing an Array ////
// more creating functions without using the typical method (reverse)

function reverseArray (array) {
  newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }
  console.log(newArray);
}

//// A List ////

/*
  This part of the book doesn't seem to fully do what's intended, even from
  it's own code portion. The internet also doesn't use the "list" terminology
  to example the example it's presenting, even if I specifically look
  for Javascript based documentation. It wants an object that looks like this:

  var list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
      value: 3,
      rest:null
    }
  }
}

and all values in the structure share the same properties with the exception
of the ones you set, like value 3

*/

function arrayToList (array) {
  var list = {};
  for (var i = 0; i < array.length; i++) {
    list = {value: array[i], rest: list};
  }
  console.log(list);
}

/// Deep Comparision ///

//Checks equality. If it's a function, then it compares if they have
//the same number of properties
function deepEqual (valOne, valTwo) {
  if (typeof valOne && typeof valTwo === "object") {
      var propsInOne = 0;
      var propsInTwo = 0;
      for (var propA in valOne) {
        propsInOne++;
      }
      for (var propB in valTwo) {
        propsInTwo++;
      }
      console.log(propsInOne === propsInTwo);
  } else {
    console.log(valOne === valTwo);
  }
}
