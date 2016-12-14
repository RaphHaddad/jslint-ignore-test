/*global console */
(function () {
    'use strict';
    var list = ['foo', 'bar', 'foobar'];
    list.forEach(function (ignore, useparam) {
        console.log(useparam);
    });
}());