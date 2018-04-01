import { Component, OnInit } from '@angular/core';
import { Storage } from 'aws-amplify';

@Component({
  selector: 'app-s3-upload',
  template: `
    <button (click)="upload()">Upload</button>
  `,
  styleUrls: ['./s3-upload.component.css']
})
export class S3UploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  upload(){
    Storage.put('test.txt', 'Hello')
    .then (result => console.log(result))
    .catch(err => console.log(err));
  }
}
