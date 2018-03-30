import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { aws_exports } from './app.component';

@Injectable()
export class UserSessionService {

  private user = null;

  constructor() { }

  login(username: string, password: string) {
    Auth.signIn(username, password)
      .then(user => {
        console.log(user)
        this.user = user;
      })
      .catch(err => console.log(err));
  }

}
