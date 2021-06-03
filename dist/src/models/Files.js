"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Files = void 0;
var class_transformer_1 = require("class-transformer");
var typeorm_1 = require("typeorm");
var Product_1 = require("./Product");
/**
 * @author: Heloisa Gabriela Vieira..
 * @description - Classe entidade de Files.
 * @description - As notations @Entity vem do TypeORM e são utilizadas para mapear as tabelas do banco de dados.
 * @inheritdoc - Classes de entidade devem ser inicializadas com a primeira letra maiúscula.
 */
var Files = /** @class */ (function () {
    function Files() {
    }
    Object.defineProperty(Files.prototype, "url", {
        get: function () {
            return process.env.API_URL + "/" + this.name;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Files.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Product_1.Product; }),
        typeorm_1.JoinColumn({ name: 'productId' }),
        __metadata("design:type", Array)
    ], Files.prototype, "products", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Files.prototype, "size", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Files.prototype, "name", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Product_1.Product; }),
        __metadata("design:type", Product_1.Product)
    ], Files.prototype, "product", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Files.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Files.prototype, "updatedAt", void 0);
    __decorate([
        class_transformer_1.Expose(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Files.prototype, "url", null);
    Files = __decorate([
        typeorm_1.Entity('files')
    ], Files);
    return Files;
}());
exports.Files = Files;
