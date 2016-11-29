//// The Sum of a Range ////

// Returning array containing start to end without the range method
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
function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}
