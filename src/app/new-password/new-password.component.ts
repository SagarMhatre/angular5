import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../user-session.service';

@Component({
  selector: 'app-new-password',
  template: `
  Welcome {{username}} <br> 
  Email Id :      <input type ="email" [(ngModel)]="email" /><br>       
  New Password :  <input type ="password" [(ngModel)]="password" /><br>
  <button (click)="change_new_password()" > Change Password </button>
  `,
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  private username: string;
  private email: string;
  private password: string;

  constructor(private _userSessionService: UserSessionService) {
    this.username = this._userSessionService.getUserName();
  }

  ngOnInit() {
  }

  private _validatePassword() {
    return true;
  }
  
  private _validateEmailId() {
    return true;
  }

  change_new_password() {
    if (this._validatePassword() && this._validateEmailId()) {
      this._userSessionService.change_new_password(this.email, this.password);
    }
  }

}
