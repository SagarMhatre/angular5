import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <input type ="text" [(ngModel)]="username" /><br>       
  <input type ="password" [(ngModel)]="password" /><br>
  <button (click)="login()" > Login </button>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log(this.username)
    console.log(this.password)
  }

}