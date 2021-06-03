"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionRouter = void 0;
var express_1 = require("express");
var SessionsController_1 = require("../controllers/SessionsController");
var ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
var SessionRouter = express_1.Router();
exports.SessionRouter = SessionRouter;
var sessionController = new SessionsController_1.SessionController();
SessionRouter.post('/', sessionController.create);
SessionRouter.use(ensureAuthenticated_1.default);
