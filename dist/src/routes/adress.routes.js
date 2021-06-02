"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdressRouter = void 0;
var express_1 = require("express");
var AdressController_1 = require("../controllers/AdressController");
var CepController_1 = require("../controllers/CepController");
var ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
var AdressRouter = express_1.Router();
exports.AdressRouter = AdressRouter;
var adressController = new AdressController_1.AdressController();
var cepController = new CepController_1.CepController();
AdressRouter.use(ensureAuthenticated_1.default);
// AdressRouter.get('/:id', profileController.show);
AdressRouter.post('/', adressController.create);
AdressRouter.get('/cep/:cep', cepController.get);
