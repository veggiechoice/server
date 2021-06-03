"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRouter = void 0;
var express_1 = require("express");
var ProfileController_1 = require("../controllers/ProfileController");
var ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
var ProfileRouter = express_1.Router();
exports.ProfileRouter = ProfileRouter;
var profileController = new ProfileController_1.ProfileController();
ProfileRouter.use(ensureAuthenticated_1.default);
ProfileRouter.get('/', profileController.show);
ProfileRouter.put('/', profileController.update);
ProfileRouter.delete('/', profileController.destroy);
