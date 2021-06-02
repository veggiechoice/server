"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacesRouter = void 0;
var express_1 = require("express");
var PlacesController_1 = require("../controllers/PlacesController");
var ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
var PlacesRouter = express_1.Router();
exports.PlacesRouter = PlacesRouter;
var placesController = new PlacesController_1.PlacesController();
PlacesRouter.post('/', placesController.create);
PlacesRouter.get('/', placesController.index);
PlacesRouter.delete('/:id', placesController.delete);
PlacesRouter.put('/:id', placesController.update);
PlacesRouter.use(ensureAuthenticated_1.default);
