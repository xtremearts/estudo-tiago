var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    /*
        constructor
        (
            public nome: string,
            public cor: string) {
        }
    */
    Animal.prototype.correr = function () {
        console.log('O animal correu');
    };
    Animal.prototype.andar = function () {
        console.log('O animal andou');
    };
    Animal.prototype.comer = function () {
        console.log('Comer do animal');
    };
    return Animal;
}());
var Coelho = /** @class */ (function (_super) {
    __extends(Coelho, _super);
    function Coelho() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coelho.prototype.comer = function () {
        console.log('Comer do coelho');
    };
    return Coelho;
}(Animal));
var coelho = new Coelho;
coelho.nome = 'Perna Longa';
coelho.cor = 'Branca';
coelho.tamanhoOrelha = 55;
console.log(coelho);
coelho.correr();
coelho.andar();
coelho.comer();
