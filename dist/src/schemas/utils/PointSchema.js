"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointSchema = void 0;
var mongoose = require('mongoose');
var PointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    },
});
exports.PointSchema = PointSchema;
