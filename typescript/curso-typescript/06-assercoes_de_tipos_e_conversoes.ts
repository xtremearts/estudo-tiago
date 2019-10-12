let meu_nome:any = 'Tiago Silva Pereira';

let contar = (<string>meu_nome).length;

let objeto = {
    nome: 'Tiago Silva Pereira'
};

(<any>objeto).funcao = 'Designer gráfico por enquanto';


let numero = 2

let numeroParaString = numero + '';

console.log(typeof numeroParaString);