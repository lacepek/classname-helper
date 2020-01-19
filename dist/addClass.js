"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addClass(classes, toBeAdded) {
    if (!toBeAdded) {
        return classes;
    }
    return classes + " " + toBeAdded;
}
exports.addClass = addClass;
