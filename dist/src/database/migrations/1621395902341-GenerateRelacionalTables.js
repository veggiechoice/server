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
exports.GenerateRelacionalTables1621395902341 = void 0;
var GenerateRelacionalTables1621395902341 = /** @class */ (function () {
    function GenerateRelacionalTables1621395902341() {
        this.name = 'GenerateRelacionalTables1621395902341';
    }
    GenerateRelacionalTables1621395902341.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"product_ingredients\" (\"productId\" uuid NOT NULL, \"ingredientId\" uuid NOT NULL, CONSTRAINT \"PK_48e5271492b738d87ca91625294\" PRIMARY KEY (\"productId\", \"ingredientId\"))")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_0c47e7d54540edb8171ebe4e77\" ON \"product_ingredients\" (\"productId\") ")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_b40728e717eb031baa2e85371e\" ON \"product_ingredients\" (\"ingredientId\") ")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"product_places\" (\"productId\" uuid NOT NULL, \"placeId\" uuid NOT NULL, CONSTRAINT \"PK_35a19b494b6486e420186167c1d\" PRIMARY KEY (\"productId\", \"placeId\"))")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_73001dbc7304139c7eca6d5762\" ON \"product_places\" (\"productId\") ")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_ec80a25409dfd494493e4113e2\" ON \"product_places\" (\"placeId\") ")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product_ingredients\" ADD CONSTRAINT \"FK_0c47e7d54540edb8171ebe4e775\" FOREIGN KEY (\"productId\") REFERENCES \"product\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product_ingredients\" ADD CONSTRAINT \"FK_b40728e717eb031baa2e85371ea\" FOREIGN KEY (\"ingredientId\") REFERENCES \"ingredient\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product_places\" ADD CONSTRAINT \"FK_73001dbc7304139c7eca6d57623\" FOREIGN KEY (\"productId\") REFERENCES \"product\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product_places\" ADD CONSTRAINT \"FK_ec80a25409dfd494493e4113e29\" FOREIGN KEY (\"placeId\") REFERENCES \"place\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 10:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GenerateRelacionalTables1621395902341.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product_places\" DROP CONSTRAINT \"FK_ec80a25409dfd494493e4113e29\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product_places\" DROP CONSTRAINT \"FK_73001dbc7304139c7eca6d57623\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product_ingredients\" DROP CONSTRAINT \"FK_b40728e717eb031baa2e85371ea\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product_ingredients\" DROP CONSTRAINT \"FK_0c47e7d54540edb8171ebe4e775\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_ec80a25409dfd494493e4113e2\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_73001dbc7304139c7eca6d5762\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"product_places\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_b40728e717eb031baa2e85371e\"")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_0c47e7d54540edb8171ebe4e77\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"product_ingredients\"")];
                    case 10:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return GenerateRelacionalTables1621395902341;
}());
exports.GenerateRelacionalTables1621395902341 = GenerateRelacionalTables1621395902341;
