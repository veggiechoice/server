"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyVeganFromText = void 0;
var non_vegan_keywords_1 = require("./non-vegan-keywords");
function verifyVeganFromText(text) {
    var isVegan = non_vegan_keywords_1.NonVeganKeyWords.some(function (el) { return text.includes(el); });
    return !isVegan;
}
exports.verifyVeganFromText = verifyVeganFromText;
