import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../user-session.service';
import { aws_exports } from '../app.component';

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

  constructor(private _userSessionService: UserSessionService) { }

  ngOnInit() {
  }

  login() {
    this._userSessionService.login(this.username, this.password)
  }
}