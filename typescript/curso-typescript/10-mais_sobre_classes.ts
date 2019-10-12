interface AnimalInterface {
    nome: string;
    cor: string;

    correr();

    andar();

    comer();
}

class Animal implements AnimalInterface {
    nome: string;
    cor: string;

/*
    constructor
    (
        public nome: string,
        public cor: string) {
    }
*/
    correr() {
        console.log('O animal correu');
    }

    andar() {
        console.log('O animal andou');
    }

    comer() {
        console.log('Comer do animal');
    }
}

class Coelho extends Animal {
    tamanhoOrelha: number;

    comer() {
        console.log('Comer do coelho');
    }
}

let coelho = new Coelho;
coelho.nome = 'Perna Longa';
coelho.cor = 'Branca';
coelho.tamanhoOrelha = 55;

console.log(coelho);

coelho.correr();
coelho.andar();
coelho.comer();