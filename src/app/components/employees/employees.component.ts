import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public title:string = 'Empleados'
  public empleado:Employee;
  public empleados:Array<Employee>
  public color:string

  constructor() {
    this.empleado = new Employee('Diego', 32, 'Front-end', false )
    this.empleados = [
      new Employee('Diego Lopez', 16, 'Conserje', true ),
      new Employee('Ana Jimenez', 27, 'Comite', true ),
      new Employee('Ruben Arisona', 44, 'Administrador', true )
    ]
  }

  ngOnInit() {
  }

  changeColor(color:string) {
    this.color = color
  }
}
