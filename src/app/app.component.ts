import { Component } from '@angular/core';

import Amplify, { Auth } from 'aws-amplify';
export const aws_exports = require('../aws-exports').default;

Amplify.configure(aws_exports);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
