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
exports.User = void 0;
var class_transformer_1 = require("class-transformer");
var typeorm_1 = require("typeorm");
var Adress_1 = require("./Adress");
/**
 * @author: Gabriel de Moura e Souza.
 * @description - Classe entidade de Usuários.
 * @description - As notations @Entity vem do TypeORM e são utilizadas para mapear as tabelas do banco de dados.
 * @inheritdoc - Classes de entidade devem ser inicializadas com a primeira letra maiúscula.
 */
var User = /** @class */ (function () {
    function User() {
    }
    Object.defineProperty(User.prototype, "avatar_url", {
        get: function () {
            return process.env.API_URL + "/" + this.avatar;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Adress_1.Adress; }, {
            eager: true,
            cascade: true,
        }),
        __metadata("design:type", Adress_1.Adress)
    ], User.prototype, "address", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], User.prototype, "avatar", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "updatedAt", void 0);
    __decorate([
        class_transformer_1.Expose(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], User.prototype, "avatar_url", null);
    User = __decorate([
        typeorm_1.Entity('user')
    ], User);
    return User;
}());
exports.User = User;
