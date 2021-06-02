"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppError = /** @class */ (function () {
    function AppError(message, status, statusCode) {
        if (status === void 0) { status = 'error'; }
        if (statusCode === void 0) { statusCode = 400; }
        this.status = status;
        this.message = message;
        this.statusCode = statusCode;
    }
    return AppError;
}());
exports.default = AppError;
