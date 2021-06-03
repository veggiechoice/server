"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientsController = void 0;
var typeorm_1 = require("typeorm");
var IngredientsRepository_1 = require("../repositories/IngredientsRepository");
/**
 * @author: Gabriel de Moura e Souza.
 * @description -Ingredients Controller.
 */
var IngredientsController = /** @class */ (function () {
    function IngredientsController() {
    }
    IngredientsController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var ingredientsRepository, query, _a, _limit, _sort, _order, _page, _search, _isVegan, ingredients;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        ingredientsRepository = new IngredientsRepository_1.IngredientsRepository();
                        query = {
                            where: [
                                {
                                    enabled: true,
                                },
                            ],
                        };
                        _a = request.query, _limit = _a._limit, _sort = _a._sort, _order = _a._order, _page = _a._page, _search = _a._search, _isVegan = _a._isVegan;
                        if (_limit) {
                            query.take = _limit;
                        }
                        if (_page) {
                            query.skip = 10 * (_page - 1 < 0 ? 0 : _page - 1);
                        }
                        if (_sort) {
                            query.order = (_b = {},
                                _b[_sort] = (_order === null || _order === void 0 ? void 0 : _order.toUpperCase()) || 'ASC',
                                _b);
                        }
                        else if (_order) {
                            query.order = {
                                name: 'ASC',
                            };
                        }
                        if (_search) {
                            query.where.push({ name: typeorm_1.Like("%" + _search + "%") });
                        }
                        if (_isVegan) {
                            query.where = {
                                isVegan: _isVegan === 'true',
                                // isso aqui é idiota, mas vou deixar poq to sem tempo
                                enabled: true,
                            };
                        }
                        return [4 /*yield*/, ingredientsRepository.listAll(query)];
                    case 1:
                        ingredients = _c.sent();
                        return [2 /*return*/, response.json({ row: ingredients, count: ingredients.length })];
                }
            });
        });
    };
    IngredientsController.prototype.show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, ingredientsRepository, ingredient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        ingredientsRepository = new IngredientsRepository_1.IngredientsRepository();
                        return [4 /*yield*/, ingredientsRepository.findById(id)];
                    case 1:
                        ingredient = _a.sent();
                        return [2 /*return*/, response.json(ingredient)];
                }
            });
        });
    };
    return IngredientsController;
}());
exports.IngredientsController = IngredientsController;
