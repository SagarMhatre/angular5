import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service'

@Component({
  selector: 'app-employee-create',
  template: `
      Id :                                      
      <br>
      <input type="text" id="id" [(ngModel)]="id" />             
      <br> 
      Age :                                     
      <br>
      <input type="number" id="age" [(ngModel)]="age"/>          
      <br> 
      Image :                                   
      <br>
      <input type="file" id='image'  />           
      <br>
      <button (click)="save()" >Save</button>
  `,
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  private id : String;
  private age : number;
  private image : String ;

  constructor(private _employeeService : EmployeeServiceService) { }

  ngOnInit() {
  }

  save(){
    this.image = './images/' + this.id;
    var employee : Employee = {id : this.id , age : this.age, image : this.image};
    this._employeeService.save(employee)
  }

}
