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
exports.GenerateTables1621395675070 = void 0;
var GenerateTables1621395675070 = /** @class */ (function () {
    function GenerateTables1621395675070() {
        this.name = 'GenerateTables1621395675070';
    }
    GenerateTables1621395675070.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"place\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"productId\" character varying NOT NULL, \"name\" character varying NOT NULL, \"description\" character varying NOT NULL, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), \"addressId\" uuid, CONSTRAINT \"PK_96ab91d43aa89c5de1b59ee7cca\" PRIMARY KEY (\"id\"))")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"user\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"name\" character varying NOT NULL, \"email\" character varying NOT NULL, \"password\" character varying NOT NULL, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), \"addressId\" uuid, CONSTRAINT \"PK_cace4a159ff9f2512dd42373760\" PRIMARY KEY (\"id\"))")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"adress\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"street\" character varying NOT NULL, \"city\" character varying NOT NULL, \"number\" character varying NOT NULL, \"country\" character varying NOT NULL, \"zipcode\" character varying NOT NULL, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT \"PK_f108093ea9cd9f59d72c2f1a057\" PRIMARY KEY (\"id\"))")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"category\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"name\" character varying NOT NULL, \"description\" character varying NOT NULL, CONSTRAINT \"PK_9c4e4a89e3674fc9f382d733f03\" PRIMARY KEY (\"id\"))")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"files\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"size\" character varying NOT NULL, \"name\" character varying NOT NULL, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), \"productId\" uuid, CONSTRAINT \"PK_6c16b9093a142e0e7613b04a3d9\" PRIMARY KEY (\"id\"))")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"product\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"name\" character varying NOT NULL, \"description\" character varying NOT NULL, \"isVegan\" boolean NOT NULL, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), \"categoryId\" uuid, \"brandId\" uuid, CONSTRAINT \"PK_bebc9158e480b949565b4dc7a82\" PRIMARY KEY (\"id\"))")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"brand\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"nome\" character varying NOT NULL, \"descri\u00E7\u00E3o\" character varying NOT NULL, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT \"PK_a5d20765ddd942eb5de4eee2d7f\" PRIMARY KEY (\"id\"))")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"ingredient\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"name\" character varying NOT NULL, \"isVegan\" boolean NOT NULL, \"enabled\" boolean NOT NULL, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT \"PK_6f1e945604a0b59f56a57570e98\" PRIMARY KEY (\"id\"))")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"place\" ADD CONSTRAINT \"FK_b827ce7039f2c65e99a276b09ec\" FOREIGN KEY (\"addressId\") REFERENCES \"adress\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user\" ADD CONSTRAINT \"FK_217ba147c5de6c107f2fa7fa271\" FOREIGN KEY (\"addressId\") REFERENCES \"adress\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"files\" ADD CONSTRAINT \"FK_57a86e1cc8eae915977547fdaeb\" FOREIGN KEY (\"productId\") REFERENCES \"product\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product\" ADD CONSTRAINT \"FK_ff0c0301a95e517153df97f6812\" FOREIGN KEY (\"categoryId\") REFERENCES \"category\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product\" ADD CONSTRAINT \"FK_bb7d3d9dc1fae40293795ae39d6\" FOREIGN KEY (\"brandId\") REFERENCES \"brand\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 13:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GenerateTables1621395675070.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product\" DROP CONSTRAINT \"FK_bb7d3d9dc1fae40293795ae39d6\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product\" DROP CONSTRAINT \"FK_ff0c0301a95e517153df97f6812\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"files\" DROP CONSTRAINT \"FK_57a86e1cc8eae915977547fdaeb\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user\" DROP CONSTRAINT \"FK_217ba147c5de6c107f2fa7fa271\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"place\" DROP CONSTRAINT \"FK_b827ce7039f2c65e99a276b09ec\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"ingredient\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"brand\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"product\"")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"files\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"category\"")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"adress\"")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"user\"")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"place\"")];
                    case 13:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return GenerateTables1621395675070;
}());
exports.GenerateTables1621395675070 = GenerateTables1621395675070;
