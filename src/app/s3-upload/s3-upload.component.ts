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
    Storage.put('test6.txt', 'Hello World')
    .then (result => console.log(result))
    .catch(err => console.log(err));

    Storage.vault.put('vault-test7.txt', 'Vault Hello World')
    .then (result => console.log(result))
    .catch(err => console.log(err));
  }
}
