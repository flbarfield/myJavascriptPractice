//// Quiz from ch1 ////
function foo(a) {
  var b = a;
  return a + b;
}

var c = foo(2);

/*
  LHS lookups are: c =, b =, a=2
  RHS lookups are: foo, =a, + b, 2

  in thinking about LHS vs RHS, think of a var declaration like,
  a = 2;

  a is a LHS declariation because it acts as a container to hold
  values. RHS are generaly the values themselves that are shoved
  into those containers.

  Why is this important? Lookups behave different if undeclared.
  RHS throws reference errors. LHS will create a new global variable
  of the name if the program is not running in "strict mode";

  if the var is found in RHS, but something with it's value is
  impossible, TypeError will be thrown.
*/
