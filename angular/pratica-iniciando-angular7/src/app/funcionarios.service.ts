import {Injectable} from '@angular/core';

interface Funcionarios {
    name: string;
    salario: number;
    bonus: number;
}

@Injectable({
    providedIn: 'root'
})
export class FuncionariosService {
    funcionarios: Funcionarios[] = [];

    constructor() {
    }
}
