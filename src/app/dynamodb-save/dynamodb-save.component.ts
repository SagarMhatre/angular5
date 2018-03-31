import { Component, OnInit } from '@angular/core';
import { API } from 'aws-amplify';

@Component({
  selector: 'app-dynamodb-save',
  template: `
    <button (click)="save()" > Save </button>
  `,
  styleUrls: ['./dynamodb-save.component.css']
})
export class DynamodbSaveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // async save() {
  //   const newEmployee = { "body": { "id": "harsha", "age": 20, "image": "harsha.jpg" } };
  //   await API.post('employeeCRUD', '/employee', { body: newEmployee })
  //   .then(response => {
  //       console.log(response);
  //     }
  //   );
  // }

  async save() {
    const newEmployee = { "id": "harsha1", "age": 20, "image": "harsha.jpg" } ;
    
    await API.post('DynamoDBLearning', '/employee', { body: newEmployee })
    .then(response => {
        console.log(response);
      }
    );
  }

}
