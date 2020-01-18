"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var replaceClass_1 = require("./replaceClass");
function removeClass(classes, toBeRemoved) {
    return replaceClass_1.replaceClass(classes, toBeRemoved, "");
}
exports.removeClass = removeClass;
