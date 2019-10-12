//boleano
var sucess = false;
sucess = true;
//numeros
var numero1 = 5;
var numero2 = 5.4;
var numero3 = 0x4a;
//string
var nome = "Tiago";
var sobrenome = "Silva";
nome = nome + " - " + sobrenome;
console.log(nome);
//array
var arrayString = ['a', 'b', 'c', 'd'];
var arrayString2 = ['a', 'b', 'c', 'd'];
//enum
var estadoCivil;
(function (estadoCivil) {
    estadoCivil[estadoCivil["solteiro"] = 0] = "solteiro";
    estadoCivil[estadoCivil["casado"] = 1] = "casado";
    estadoCivil[estadoCivil["divorciado"] = 2] = "divorciado";
})(estadoCivil || (estadoCivil = {}));
;
var meuEstadoCivil = estadoCivil.casado;
