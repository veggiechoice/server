"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
var express_1 = require("express");
var UserController_1 = require("../controllers/UserController");
var ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
var UserRouter = express_1.Router();
exports.UserRouter = UserRouter;
var userController = new UserController_1.UserController();
UserRouter.post('/', userController.create);
UserRouter.use(ensureAuthenticated_1.default);
