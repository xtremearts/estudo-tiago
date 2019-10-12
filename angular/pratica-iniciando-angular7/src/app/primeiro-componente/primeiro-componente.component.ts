import {Component, OnInit} from '@angular/core';
import {FuncionariosService} from '../funcionarios.service';
import funcionarios from '../funcionarios';

@Component({
    selector: 'app-primeiro-componente',
    templateUrl: './primeiro-componente.component.html',
    styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent implements OnInit {
    nome = '';
    salario = 0;
    bonus = 0;

    constructor(public funcionariosService: FuncionariosService) {
    }

    ngOnInit() {
    }

    adicionarFuncionario() {
        this.funcionariosService.funcionarios.push({name: this.nome, salario: this.salario, bonus: this.bonus});
        console.log(this.funcionariosService);
    }

    verificarSalario(funcionario) {
        return {'verde': funcionario.salario > 1000, 'vermelho' : funcionario.salario < 1000};

    }

}
