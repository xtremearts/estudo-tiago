var Animal = /** @class */ (function () {
    function Animal(nome, cor) {
        this.nome = nome;
        this.cor = cor;
    }
    return Animal;
}());
/* Classe padrão antigo
class Animal {
    nome:string;
    cor:string;
    constructor(nome:string, cor:string){
        this.nome = nome;
        this.cor = cor;
    }
}
*/
var myAnimal = new Animal('coelho', 'branco');
console.log(myAnimal.nome);
console.log(myAnimal.cor);
