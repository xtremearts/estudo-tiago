import {Component, OnInit} from '@angular/core';
import funcionarios from '../funcionarios';
import {Funcionarios, FuncionariosService} from '../funcionarios.service';

@Component({
    selector: 'app-employee-new',
    templateUrl: './employee-new.component.html',
    styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {
    funcionario: Funcionarios = {
        name: '',
        salario: 0,
        bonus: 0
    };


    constructor(public funcionariosService: FuncionariosService) {
    }

    ngOnInit() {
    }

    adicionarFuncionario() {
        const copy = Object.assign({}, this.funcionario);
        this.funcionariosService.adicionarFuncionario(copy);
    }

}
