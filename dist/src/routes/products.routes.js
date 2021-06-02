"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var ProductsController_1 = require("../controllers/ProductsController");
var ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
var upload_1 = __importDefault(require("../config/upload"));
var ProductsRoutes = express_1.Router();
exports.ProductsRoutes = ProductsRoutes;
var productsController = new ProductsController_1.ProductsController();
var upload = multer_1.default(upload_1.default);
ProductsRoutes.use(ensureAuthenticated_1.default);
ProductsRoutes.post('/', upload.array('images'), productsController.create);
ProductsRoutes.get('/', productsController.index);
ProductsRoutes.get('/:id', productsController.show);
