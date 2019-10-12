class Animal {
    constructor
    (
        public nome: string,
        public cor: string) {
    }
}

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


let myAnimal = new Animal('coelho', 'branco');

console.log(myAnimal.nome);
console.log(myAnimal.cor);