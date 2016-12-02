// finds how many times you can buy an item
function timesCanBuy () {
  var account = prompt("How much money do you have?");
  var cost = prompt("What is the cost of the thing you would like to buy?");
  var bought =  0;

  while (account > -1000) {
    if (isNaN(account) || isNaN(cost)) {
      alert("One of your inputs was not a numerical value.")
    } else if (account - cost < 0) {
      alert("You can buy that item " + bought + " times.");
    } else {
      account -= cost
      bought++
    }
  }
}
