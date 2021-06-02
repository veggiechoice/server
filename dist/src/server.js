"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
require("reflect-metadata");
require("es6-shim");
var morgan_1 = __importDefault(require("morgan"));
var express_1 = __importDefault(require("express"));
require("dotenv/config");
var mongoose_1 = __importDefault(require("mongoose"));
var routes_1 = require("./routes");
require("./database");
var AppError_1 = __importDefault(require("./errors/AppError"));
var upload_1 = __importDefault(require("./config/upload"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(routes_1.Routes);
app.use(morgan_1.default('dev'));
app.use('/files', express_1.default.static(upload_1.default.uploadsFolder));
mongoose_1.default.connect(String(process.env.MONGO_URL), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(function (err, _request, response, _next) {
    if (err instanceof AppError_1.default) {
        return response.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    });
});
app.listen(process.env.PORT || 3333, function () {
    console.log("\uD83E\uDE90 - SERVER STARTED AT " + process.env.PORT);
});
