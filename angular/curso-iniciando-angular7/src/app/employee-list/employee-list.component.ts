import {Component, OnInit} from '@angular/core';
import funcionarios from '../funcionarios';
import {FuncionariosService} from '../funcionarios.service';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

   // funcionarios = funcionarios;

    constructor(public funcionariosService: FuncionariosService) {
    }

    ngOnInit() {
    }

    getSalaryColor(funcionario) {
        return {'salary-expensive' : funcionario.salario > 2000 , 'salary-cheap' : funcionario.salario < 1000};
    }

}
