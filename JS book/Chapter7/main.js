var $itemCount = $('ul').children().length;
var $newItemButton = $('#initButton');
var $showAddForm = $('#selectionTwo');

function newItemCheck() {
    'use strict';
    if ($('ul').children().hasClass('newItem')) {
        $itemCount += 1;
        $('ul').children().removeClass('newItem').addClass('item');
        $('h2').replaceWith('<h2> Buy Groceries <em> ' + $itemCount + '</em></h2>');
    } else {
        $('h2').replaceWith('<h2> Buy Groceries <em> ' + $itemCount + '</em></h2>');
    }
}

// Add Grocery Button Controls

$newItemButton.on('click', function () {
    'use strict';
    $('#initSelection').hide();
    $showAddForm.show();
});

$('#newAdd').on('focus', function () {
    'use strict';
    $('#newAdd').val('');
});

$('#secondButton').on('click', function () {
    'use strict';
    var inputVal = $('#newAdd').val();
    if ((inputVal === ('') || inputVal === ('Input invalid. Try again!') || inputVal === ('Type in some items!'))) {
        $('#newAdd').val('Input invalid. Try again!');
    } else {
        $('ul').append('<li id=' + 'item' + ($itemCount + 1).toString() + ' ' + 'class=\'newItem\'>' + inputVal + '<button class=\'trash\'></button></li>');
        $showAddForm.hide();
        $('#initSelection').show();
        newItemCheck();
    }
});

//Trash Button

$('.trash').on('click', function () {
    'use strict';
    $(this).parent().fadeOut(400);
    $itemCount -= 1;
    newItemCheck();
});

// Clicks will make item COMPLETE and change to HOT color
// Or make the item incomplete and change to normal.

$('li').on('click', function () {
    'use strict';
    if ($(this).hasClass('hot')) {
        $(this).removeClass('hot check');
    } else {
        $(this).addClass('hot check');
    }
});

newItemCheck();

//For the next project - why not try making an object var
//and then list the qualities each list item would have?
//I imagine it would prevent a lot of the bugs from happening,
//and perhaps I couldve been able to add continuing functionality
//to new list items as well. 