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
exports.Product = void 0;
var class_transformer_1 = require("class-transformer");
var typeorm_1 = require("typeorm");
var Brands_1 = require("./Brands");
var Categories_1 = require("./Categories");
var Files_1 = require("./Files");
var Ingredients_1 = require("./Ingredients");
var Product = /** @class */ (function () {
    function Product() {
    }
    Object.defineProperty(Product.prototype, "thumbnail_url", {
        get: function () {
            if (this.thumbnail && !this.isSeloVegano)
                return process.env.API_URL + "/" + this.thumbnail;
            if (this.thumbnail && this.isSeloVegano)
                return this.thumbnail;
            if (this.files[0])
                return this.files[0].url;
            return null;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Product.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Categories_1.Categories; }, {
            cascade: true,
            eager: true,
        }),
        __metadata("design:type", Categories_1.Categories)
    ], Product.prototype, "category", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Brands_1.Brand; }),
        __metadata("design:type", Brands_1.Brand)
    ], Product.prototype, "brand", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Files_1.Files; }, function (file) { return file.product; }, {
            eager: true,
            cascade: true,
        }),
        __metadata("design:type", Array)
    ], Product.prototype, "files", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return Ingredients_1.Ingredient; }, {
            eager: true,
            cascade: true,
        }),
        typeorm_1.JoinTable({ name: 'product_ingredients' }),
        __metadata("design:type", Array)
    ], Product.prototype, "ingredients", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Product.prototype, "thumbnail", void 0);
    __decorate([
        typeorm_1.Column({
            unique: true,
        }),
        __metadata("design:type", String)
    ], Product.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({
            default: true,
        }),
        __metadata("design:type", Boolean)
    ], Product.prototype, "isVegan", void 0);
    __decorate([
        typeorm_1.Column({
            default: false,
        }),
        __metadata("design:type", Boolean)
    ], Product.prototype, "isSeloVegano", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Product.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Product.prototype, "updatedAt", void 0);
    __decorate([
        class_transformer_1.Expose(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Product.prototype, "thumbnail_url", null);
    Product = __decorate([
        typeorm_1.Entity('product')
    ], Product);
    return Product;
}());
exports.Product = Product;
