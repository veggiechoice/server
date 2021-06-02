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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
var class_transformer_1 = require("class-transformer");
var typeorm_1 = require("typeorm");
var AppError_1 = __importDefault(require("../errors/AppError"));
var IngredientsRepository_1 = require("../repositories/IngredientsRepository");
var PlacesRepository_1 = require("../repositories/PlacesRepository");
var ProductsRepository_1 = require("../repositories/ProductsRepository");
var convertStringToObjectWithId_1 = require("../utils/convertStringToObjectWithId");
/**
 * @author: Gabriel de Moura e Souza.
 * @description -Places Controller.
 */
var ProductsController = /** @class */ (function () {
    function ProductsController() {
    }
    ProductsController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var productsRepository, files, _a, category, brand, ingredients, name, description, isVegan, location, productExist, ingredientsObj, product, placesRepository;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        productsRepository = new ProductsRepository_1.ProductsRepository();
                        files = request.files;
                        if (request.files) {
                            files = files.map(function (el) {
                                return {
                                    name: el.filename,
                                    size: el.size,
                                };
                            });
                        }
                        _a = request.body, category = _a.category, brand = _a.brand, ingredients = _a.ingredients, name = _a.name, description = _a.description, isVegan = _a.isVegan, location = _a.location;
                        return [4 /*yield*/, productsRepository.findByName(name)];
                    case 1:
                        productExist = _b.sent();
                        if (productExist) {
                            throw new AppError_1.default('A Product with this name already exist');
                        }
                        if (ingredients) {
                            ingredientsObj = convertStringToObjectWithId_1.ConvertStringToObject(ingredients);
                        }
                        return [4 /*yield*/, productsRepository.create({
                                category: category ? JSON.parse(category) : null,
                                brand: brand,
                                ingredients: ingredients ? ingredientsObj : null,
                                name: name,
                                description: description,
                                isVegan: Boolean(isVegan),
                                files: files || null,
                                thumbnail: files[0].name || null,
                            })];
                    case 2:
                        product = _b.sent();
                        if (!location) return [3 /*break*/, 4];
                        placesRepository = new PlacesRepository_1.PlacesRepository();
                        return [4 /*yield*/, placesRepository.create(JSON.parse(location))];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/, response.json(class_transformer_1.classToPlain(product))];
                }
            });
        });
    };
    ProductsController.prototype.createIngredient = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var ingredientsRepository, _a, name, isVegan, enabled, ingrediet;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        ingredientsRepository = new IngredientsRepository_1.IngredientsRepository();
                        _a = request.body, name = _a.name, isVegan = _a.isVegan, enabled = _a.enabled;
                        return [4 /*yield*/, ingredientsRepository.create({
                                name: name,
                                isVegan: isVegan,
                                enabled: enabled,
                            })];
                    case 1:
                        ingrediet = _b.sent();
                        return [2 /*return*/, response.json(ingrediet)];
                }
            });
        });
    };
    ProductsController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var productsRepository, query, _a, _limit, _sort, _order, _page, _search, _categoryId, _brandId, products;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        productsRepository = new ProductsRepository_1.ProductsRepository();
                        query = {
                            where: [],
                        };
                        _a = request.query, _limit = _a._limit, _sort = _a._sort, _order = _a._order, _page = _a._page, _search = _a._search, _categoryId = _a._categoryId, _brandId = _a._brandId;
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
                            query.where = [
                                { name: typeorm_1.Like("%" + _search + "%") },
                                { description: typeorm_1.Like("%" + _search + "%") },
                            ];
                        }
                        if (_categoryId) {
                            query.where.push({
                                category: {
                                    id: _categoryId,
                                },
                            });
                        }
                        if (_brandId) {
                            query.where.push({
                                brand: {
                                    id: _brandId,
                                },
                            });
                        }
                        return [4 /*yield*/, productsRepository.listAll(query)];
                    case 1:
                        products = _c.sent();
                        return [2 /*return*/, response.json(products)];
                }
            });
        });
    };
    ProductsController.prototype.show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, productsRepository, products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        productsRepository = new ProductsRepository_1.ProductsRepository();
                        return [4 /*yield*/, productsRepository.findById(id)];
                    case 1:
                        products = _a.sent();
                        return [2 /*return*/, response.json(products)];
                }
            });
        });
    };
    return ProductsController;
}());
exports.ProductsController = ProductsController;
