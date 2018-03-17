import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

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

  private employees: Employee[] =
    [
      { id: "sagar", age: 33, image: "/images/sagar.jpg" },
      { id: "sunil", age: 34, image: "/images/sunil.jpg" }
    ];

  constructor() { }

  ngOnInit() {
  }

}
