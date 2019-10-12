//boleano
    let sucess:boolean = false;
    sucess = true;

//numeros
    let numero1:number = 5;
    let numero2:number = 5.4;
    let numero3:number = 0x4a;

//string
    let nome = "Tiago";
    let sobrenome:string = "Silva";
    nome = `${nome} - ${sobrenome}`;
    console.log(nome);

//array
    let arrayString: string[] = ['a', 'b', 'c', 'd'];
    let arrayString2: Array<any> = ['a', 'b', 'c', 'd'];

//enum
    enum estadoCivil {solteiro, casado, divorciado};

    let meuEstadoCivil:estadoCivil = estadoCivil.casado;