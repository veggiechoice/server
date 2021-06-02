"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var PointSchema_1 = require("./utils/PointSchema");
var PlacesSchema = new mongoose_1.default.Schema({
    name: String,
    productIds: [String],
    description: String,
    address: String,
    location: {
        type: PointSchema_1.PointSchema,
        index: '2dsphere',
    },
});
exports.default = mongoose_1.default.model('Places', PlacesSchema);
