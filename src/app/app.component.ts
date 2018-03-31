import { Component } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';
import { API } from 'aws-amplify';
export const aws_exports = require('../aws-exports').default;
import {Router} from "@angular/router";

//Amplify.configure(aws_exports);
Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: '<copy from src/aws-exports.js>',
    // REQUIRED - Amazon Cognito Region
        region: '<copy from src/aws-exports.js>', 
    // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: '<copy from src/aws-exports.js>', 
    // OPTIONAL - Amazon Cognito Web Client ID
        userPoolWebClientId: '<copy from src/aws-exports.js>',
  },
  API: {
      endpoints: [
          {
              name: "DynamoDBLearning",
              endpoint: "https://bpnw5ncq1d.execute-api.ap-south-1.amazonaws.com/dev",
              service: "lambda",
              region: "ap-south-1"
          }
      ]
  }
});

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
