"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesRouter = void 0;
var express_1 = require("express");
var FilesController_1 = require("../controllers/FilesController");
var ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
var FilesRouter = express_1.Router();
exports.FilesRouter = FilesRouter;
var filesController = new FilesController_1.FilesController();
FilesRouter.post('/', filesController.create);
FilesRouter.get('/', filesController.index);
FilesRouter.delete('/:id', filesController.delete);
FilesRouter.put('/:id', filesController.update);
FilesRouter.use(ensureAuthenticated_1.default);
