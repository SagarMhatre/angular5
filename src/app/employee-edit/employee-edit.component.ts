import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service'
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  template: `
  Id :                                      
  <br>
  <input type="text" id="id" [(ngModel)]="employee.id" />             
  <br> 
  Age :                                     
  <br>
  <input type="number" id="age" [(ngModel)]="employee.age"/>          
  <br> 
  Image :                                   
  <br>
  <input type="file" id='image'  />           
  <br>
  <button (click)="save()" >Save</button>
  <button (click)="delete()" >Delete</button>
`,
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  private employee : Employee;
  private id : number;

  constructor(private _employeeService : EmployeeServiceService, 
    private _router: Router,
    private _route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = parseInt(this._route.snapshot.paramMap.get('id'));
    this.employee = this._employeeService.get(this.id);
  }

  save(){
    this._employeeService.update(this.id, this.employee);
    this._router.navigate(['list'])
  }

  delete(){
    this._employeeService.delete(this.id);
    this._router.navigate(['list'])
  }

}
