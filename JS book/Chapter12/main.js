var slider = document.getElementById('slider'),
    $tableBody = $('<tbody></tbody>'),
    i,
    results = [],
    people = [
        {
            name: 'Casey',
            rate: 60
        },
        {
            name: 'Camille',
            rate: 80
        },
        {
            name: 'Gordon',
            rate: 75
        },
        {
            name: 'Nigel',
            rate: 120
        }
    ];

people.forEach(function (person) {
    'use strict';
    if (person.rate >= 65 && person.rate <= 90) {
        results.push(person);
    }
});

for (i = 0; i < results.length; i++) {
    var person = results[i],
        $row = $('<tr></tr>');
    
    $row.append($('<td></td>').text(person.name));
    $row.append($('<td></td>').text(person.rate));
    $tableBody.append($row);
}

$('thead').after($tableBody);

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 65,
        'max': 90
    }
});