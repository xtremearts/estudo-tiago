import { Injectable } from '@angular/core';

export interface Funcionarios {
  name: string;
  salario: number;
  bonus: number;
}

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  funcionarios: Funcionarios[] = [];

  constructor() { }

    adicionarFuncionario(funcionario: Funcionarios) {
        funcionario.bonus = funcionario.salario >= 1000 ? 0 : funcionario.bonus;
        this.funcionarios.push(funcionario);
    }

}


