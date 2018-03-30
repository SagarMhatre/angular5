import { Component } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';
export const aws_exports = require('../aws-exports').default;
import {Router} from "@angular/router";

Amplify.configure(aws_exports);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _router: Router) { 
    this._router.navigate(['login']);
  }

}
