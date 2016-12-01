

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

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(this.numOne * this.numOne + this.numTwo * this.numTwo);
  }
})

//// Another Cell ////
