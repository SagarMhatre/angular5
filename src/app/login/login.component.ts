import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import {aws_exports} from '../app.component';

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
    Auth.signIn(this.username, this.password)
      .then(user => {
        console.log(user)
      })
      .catch(err => console.log(err));
  }
}