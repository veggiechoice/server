"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRouter = void 0;
var express_1 = require("express");
var CategoriesController_1 = require("../controllers/CategoriesController");
var ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
var CategoriesRouter = express_1.Router();
exports.CategoriesRouter = CategoriesRouter;
var categoriesController = new CategoriesController_1.CategoriesController();
CategoriesRouter.post('/', categoriesController.create);
CategoriesRouter.get('/', categoriesController.index);
CategoriesRouter.use(ensureAuthenticated_1.default);
