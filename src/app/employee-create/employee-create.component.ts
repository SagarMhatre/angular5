import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  save(){
    this.image = './images/' + this.id;
    console.log('saving ' + this.id + '\t' + this.age + '\t' + this.image);
  }

}
