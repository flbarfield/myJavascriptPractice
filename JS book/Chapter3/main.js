var hotel = {
    name: 'Park',
    roomRate: 240, /*Dollar Amount*/
    discount: 15, /*Percent Discount */
    
    offerPrice: function () {
        'use strict';
        var offerRate = this.roomRate * ((100 - this.discount) / 100);
        return offerRate;
    }
};

var hotelName = document.getElementById('hotel');
var standardRate = document.getElementById('roomRate');
var discountRate = document.getElementById('discountPrice');

//Offer Details

hotelName.textContent = hotel.name;
standardRate.textContent = '$' + hotel.roomRate.toFixed(2);
discountRate.textContent = '$' + hotel.offerPrice();

// Date stuff

var expiryMsg, today, elEnds;

function offerExpires(today) {
    'use strict';
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    
    weekFromToday = new Date(today.getTime() + 7  * 24 * 60 * 60 * 1000);
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
    
//    create the message
    expiryMsg = 'Offer expires next ';
    expiryMsg += day + '<br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
}
 
today = new Date();
elEnds = document.getElementById('offer');
elEnds.innerHTML = offerExpires(today);