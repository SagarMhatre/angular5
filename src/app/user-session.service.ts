import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { aws_exports } from './app.component';
import { Router } from "@angular/router";

@Injectable()
export class UserSessionService {

  private user = null;

  constructor(private _router: Router) { }

  login(username: string, password: string) {
    Auth.signOut();
    
    Auth.signIn(username, password)
      .then(response => {
        console.log(response);
        if (response.signInUserSession != null) {
          this.user = response;
          this._router.navigate(['save']);
        } else if (response.challengeName == "NEW_PASSWORD_REQUIRED") {
          this.user = response;
          this._router.navigate(['new-password']);
        } else {
          console.log(response);
        }
      })
      .catch(err => console.log(err));
  }

  change_new_password(email, password) {
    this.user.challengeParam.userAttributes.email = email;
    Auth.completeNewPassword(this.user, password, this.user.challengeParam.userAttributes)
      .then(response => {
        if (response.signInUserSession != null) {
          this.user = response;
          this._router.navigate(['home']);
        } else {
          console.log(response);
        }
      })
  }

  getUserName() {
    if (this.user != null) {
      return this.user.username;
    } else {
      this._router.navigate(['login']);
    }
  }

}
