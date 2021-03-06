﻿
// Step 1 - One Way Binding
var step_1 = function () {

    var person = {
        firstName: 'Bobbe',
        lastName: 'Malle',
        age: 32
    };

    ko.applyBindings(person, $('#step_1')[0]);

};

// Step 2 - Two Way Binding
var step_2 = function () {

    var person = {
        firstName: ko.observable('Bobbe'),
        lastName: ko.observable('Malle'),
        age: ko.observable(32),
    };

    ko.applyBindings(person, $('#step_2')[0]);

};

// Step 3 - ko.observableArray
var step_3 = function () {

    var people = [
            { firstName: 'Bobbe', lastName: 'Malle' },
            { firstName: 'Smazzo', lastName: 'Gaio' },
            { firstName: 'Pool', lastName: 'Santi' }
    ];

    ko.applyBindings({ people: people }, $('#step_3')[0]);

};

// Step 4 - Templating
var step_4 = function () {

    var people = [
            { firstName: 'Bobbe', lastName: 'Malle' },
            { firstName: 'Smazzo', lastName: 'Gaio' },
            { firstName: 'Pool', lastName: 'Santi' }
    ];

    ko.applyBindings({ people: people }, $('#step_4')[0]);

};

// Step 5 - Components
var step_5 = function () {

    var people = [
            { firstName: 'Bobbe', lastName: 'Malle' },
            { firstName: 'Smazzo', lastName: 'Gaio' },
            { firstName: 'Pool', lastName: 'Santi' }
    ];

    ko.applyBindings({ people: people }, $('#step_5')[0]);

};