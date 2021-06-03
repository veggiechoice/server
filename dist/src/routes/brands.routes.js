"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsRouter = void 0;
var express_1 = require("express");
var BrandsController_1 = require("../controllers/BrandsController");
var ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
var BrandsRouter = express_1.Router();
exports.BrandsRouter = BrandsRouter;
var brandsController = new BrandsController_1.BrandsController();
BrandsRouter.post('/', brandsController.create);
BrandsRouter.get('/', brandsController.index);
BrandsRouter.delete('/:id', brandsController.delete);
BrandsRouter.put('/:id', brandsController.update);
BrandsRouter.use(ensureAuthenticated_1.default);
