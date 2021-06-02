"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var crypto_1 = __importDefault(require("crypto"));
var upload_1 = __importDefault(require("./upload"));
var tmpFolder = path_1.default.resolve(__dirname, '..', '..', 'tmp');
exports.default = {
    directory: upload_1.default.directory,
    uploadsFolder: path_1.default.resolve(tmpFolder, 'uploads', 'labels'),
    storage: multer_1.default.diskStorage({
        destination: path_1.default.resolve(tmpFolder, 'uploads', 'labels'),
        filename: function (requst, file, callback) {
            var fileHash = crypto_1.default.randomBytes(10).toString('hex');
            var fileName = "" + fileHash;
            return callback(null, fileName);
        },
    }),
};
