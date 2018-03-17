import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable()
export class EmployeeServiceService {

  constructor() { }

  private employees : Employee[] =
    [
      { id: "sagar", age: 33, image: "/images/sagar.jpg" },
      { id: "sunil", age: 34, image: "/images/sunil.jpg" }
    ];

  getAll() {
    return this.employees;
  }

  get(id : number) {
    return this.employees[id];
  }

  save(employee: Employee){
    this.employees.push(employee);
  }

  update(id : number, employee: Employee){
    this.employees[id] = employee;
  }

}
