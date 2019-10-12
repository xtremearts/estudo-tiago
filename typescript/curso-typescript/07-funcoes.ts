const soma = function (x:number, y:number):number {
    return x + y;
}



let numero: number = soma(5, 4);


let funcaoDoisParametros = (primeiro, segundo?) =>{
    return primeiro + segundo;

};

let valor = funcaoDoisParametros('tiago');

console.log(valor);