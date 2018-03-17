import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {EmployeeServiceService} from '../employee-service.service'

@Component({
  selector: 'app-employee-list',
  template: `
  Employee List : 
  <div *ngFor = "let employee of employees" >
       {{employee.id}} 
  </div>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  private employees: Employee[] ;

  constructor(private _employeeService : EmployeeServiceService) { }

  ngOnInit() {
    this.employees = this._employeeService.getAll();
  }
  
}
