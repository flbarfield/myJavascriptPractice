//******ACCORDIAN CONTENT*********
    
$('#accordian button').on('click', function (e) {
    'use strict';
    e.preventDefault();
    $(this).next('p').not(':animated').slideToggle();
});

//******TAB CONTENT*********

//only selects one of the tabs at a time
$('#tabContent button').on('click', function (e) {
    'use strict';
    var $this = $(this),
        panelID = $this.hash;
    
    $this.siblings().removeClass('selected');
    $this.addClass('selected');
    
    //Need to pull up the related tab for clicked element
    
//    I believe this part will not work because perhaps you can\'t assign the href property with a button? Would perhaps need to make this all ul and lis afterall. TO BE FIXED LATER PERHAPS.
    
    $('#tabContent #' + panelID).addClass('active');
    
});

//******MODAL WINDOW*********

//There's modal script that could have made this quicker

$('#modalWindow #img1').on('click', function (e) {
    'use strict';
    $('#shareOptions').show();
});

$('#modalWindow button').on('click', function (e) {
    'use strict';
    $('#shareOptions').hide();
});

//******PHOTO VIEWER*********

var request,
    $current,
    cache = {},
    $frame = $('#test'),
    $thumbs = $('.thumb');


function crossFade($img) {
    'use strict';
    if ($current) {
        $current.stop().fadeOut('slow');
    }
    
//    $img.css({ //Sets the CSS margin to Center
//        marginLeft: -$img.width() / 2,
//        marginTop: -$img.width() / 2
//    });
    
    $img.stop().fadeTo('slow', 1);
    
    $current = $img;
}

$thumbs.on('click', function (e) {
    'use strict';
    var $img,
        src = this.href,
        request = src;
    
    e.preventDefault(); //Stops default link behaivior
    
    $thumbs.removeClass('active');
    $(this).addClass('active');
    
    if (cache.hasOwnProperty(src)) {            //If cache contains image and if 
        if (cache[src].isLoading === false) {  //is loading is false, call 
            crossFade(cache[src].$img);         //crossfade function
        }
    } else {
        $img = $('<img/>');
        cache[src] = {
            $img: $img,
            isLoading: true
        };
        $img.on('load', function () {
            $img.hide();
            $frame.removeClass('is-loading').append($img);
            cache[src].isLoading = false;
            if ('request' === src) {
                crossFade($img);
            }
        });
        $frame.addClass('is-loading');
        $img.attr({
            'src': src,
            'alt': this.title || ''
        });
    }
});

$thumbs.eq(0).click(); // simulates Click on first thumbnail

//******RESPONSIVE SLIDER*********

$('.slider').each(function () {
    'use strict';
    var $this = $(this),
        $group = $this.find('.slide-group'),
        $slides = $this.find('.slide'),
        buttonArray = [],
        currentIndex = 0,
        timeout;
    
    function move(newIndex) {
        var animateLeft, slideLeft;
        
        advance();
        
        if ($group.is(':animated') || currentIndex === newIndex) {
            return;
        }
        
        buttonArray[currentIndex].removeClass('active');
        buttonArray[newIndex].addClass('active');
        
        if (newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%';
        } else {
            slideLeft = '-100%';
            animateLeft = '100%';
        }
        
        $slides.eq(newIndex).css({left: slideLeft, display: 'block'});
        $group.animate({left: animateLeft}, function () {
            $slides.eq(currentIndex).css({display: 'none'});
            $slides.eq(newIndex).css({left: 0});
            $group.css({left: 0});
            currentIndex = newIndex;
        });
    }
    
    function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            if (currentIndex < ($slides.length - 1)) {
                move(currentIndex + 1);
            } else {
                move();
            }
        }, 4000);
    }
    
    $.each($slides, function (index) {
        var $button = $('<button type=\'button\' class=\'slide-btn\'>&bull;</button');
        if (index === currentIndex) {
            $button.addClass('active');
        }
        $button.on('click', function () {
            move(index);
        }).appendTo('.slide-buttons');
    });
    
    advance();
    
});