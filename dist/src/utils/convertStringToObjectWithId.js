"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertStringToObject = void 0;
function ConvertStringToObject(element) {
    return element.split(',').map(function (el) {
        return {
            id: el,
        };
    });
}
exports.ConvertStringToObject = ConvertStringToObject;
