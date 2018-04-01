import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component'
import {EmployeeCreateComponent} from './employee-create/employee-create.component'
import {EmployeeEditComponent} from './employee-edit/employee-edit.component'
import {S3UploadComponent} from './s3-upload/s3-upload.component'

const routes: Routes = [
  {path:"list" , component : EmployeeListComponent },
  {path:"create" , component : EmployeeCreateComponent},
  {path:"edit/:id" , component : EmployeeEditComponent},
  {path:"s3upload" , component : S3UploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
