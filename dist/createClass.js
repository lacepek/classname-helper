"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addClass_1 = require("./addClass");
function createClass(options) {
    var keys = Object.keys(options);
    return keys.reduce(function (accumulator, key) {
        var current = options[key];
        if (current) {
            return addClass_1.addClass(accumulator, key);
        }
        return accumulator;
    }, '');
}
exports.createClass = createClass;
