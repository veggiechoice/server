"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdressesRepository = void 0;
var typeorm_1 = require("typeorm");
var Adress_1 = require("../models/Adress");
// interface IAdress {
//   street: string;
//   city: string;
//   number: string;
//   country: string;
//   zipcode: string;
// }
/**
 * @author: Gabriel de Moura e Souza.
 * @description - Classe de repositorio de Usuários.
 */
var AdressesRepository = /** @class */ (function () {
    function AdressesRepository() {
        this.ormRepository = typeorm_1.getRepository(Adress_1.Adress);
        this.ormRepository = typeorm_1.getRepository(Adress_1.Adress);
    }
    return AdressesRepository;
}());
exports.AdressesRepository = AdressesRepository;
