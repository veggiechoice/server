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
exports.Adress = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
/**
 * @author: Gabriel de Moura e Souza.
 * @description - Classe entidade de Endereços.
 * @description - As notations @Entity vem do TypeORM e são utilizadas para mapear as tabelas do banco de dados.
 * @inheritdoc - Classes de entidade devem ser inicializadas com a primeira letra maiúscula.
 */
var Adress = /** @class */ (function () {
    function Adress() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Adress.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Adress.prototype, "street", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Adress.prototype, "city", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Adress.prototype, "number", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Adress.prototype, "country", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Adress.prototype, "zipcode", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Adress.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Adress.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return User_1.User; }, function (user) { return user.address; }),
        __metadata("design:type", User_1.User)
    ], Adress.prototype, "user", void 0);
    Adress = __decorate([
        typeorm_1.Entity('adress')
    ], Adress);
    return Adress;
}());
exports.Adress = Adress;
