/// A vector type ////
// constructor
function Vector (numOne, numTwo) {
  this.numOne = numOne;
  this.numTwo = numTwo;
}

Vector.prototype.plus = function (otherVector) {
  return this.numOne + otherVector.numOne, this.numTwo - otherVector.numTwo
}

Vector.prototype.minus = function (otherVector) {
  return this.numOne + otherVector.numOne, this.numTwo - otherVector.numTwo
}
