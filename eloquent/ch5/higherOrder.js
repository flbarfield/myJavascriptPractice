
//// Flattening ////

var vals = [
  [256, 215, 5324],
  [21556, 580914, 829151],
  [855, 1245, 2185]
]

/*
  The book didn't tell me what EXACTLY reduce does so I did a bit of digging.
  1) It does a loop. The a holds the initial value as well as the current
    value within the iteration. It's the current!
  2) B holds the next value within an array that the function will be applied
    to.
  3) The body of the function is what your doing to the array everytime there
    is an iteration. This means that reduce method could possibly be the most
    versitle of the array methods.
  4) adding a comma and starting point after the } for reduce, you can set
    where the function will start.

  I kept starting at solutions and thinking WHAT IS A?! WHAT IS B!!?!?
  Had an idea, but now I know for certain
*/
var flattened = vals.reduce(function(a, b){
  return a.concat(b);
})
