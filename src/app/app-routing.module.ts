import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component'
import {EmployeeCreateComponent} from './employee-create/employee-create.component'
import {EmployeeEditComponent} from './employee-edit/employee-edit.component'
import {LoginComponent} from './login/login.component'
import {NewPasswordComponent} from './new-password/new-password.component'

const routes: Routes = [
  {path:"login" , component : LoginComponent },
  {path:"new-password" , component : NewPasswordComponent },
  {path:"home" , component : EmployeeListComponent },
  {path:"list" , component : EmployeeListComponent },  
  {path:"create" , component : EmployeeCreateComponent},
  {path:"edit/:id" , component : EmployeeEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
