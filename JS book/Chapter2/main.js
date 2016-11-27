var price = 5;
var quantity = 14;
var totalValue = '$' + price * quantity;
var username = 'Molly';
var greeting = 'Howdy, ';
var el = document.getElementById('quote');
var el2 = document.getElementById('greeting');

el.textContent = totalValue;
el2.textContent = greeting + username + '!';
