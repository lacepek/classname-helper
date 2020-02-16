"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addClass(classes) {
    var toBeAdded = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        toBeAdded[_i - 1] = arguments[_i];
    }
    if (!toBeAdded) {
        return classes;
    }
    return classes + " " + toBeAdded
        .join(' ')
        .trim()
        .replace(/  +/g, ' ');
}
exports.addClass = addClass;
