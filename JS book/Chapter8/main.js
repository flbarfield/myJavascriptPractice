function widthCheck() {
    'use strict';
    var contentColumns = $('#mid, #right, #left');
    
    if ($(window).width() > 675) {
        $('#content').addClass('grid-container');
        contentColumns.addClass('grid-33');
//        $('h1').append('<h2> Currently showing listings for New York. Please click a location to update listings. Or click a class to display descriptions');
    } else {
        $('#content').removeClass('grid-container');
        contentColumns.removeClass('grid-33');
    }
}

$(window).on('resize', widthCheck());
