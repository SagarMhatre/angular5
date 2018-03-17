import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component'
import {EmployeeCreateComponent} from './employee-create/employee-create.component'

const routes: Routes = [
  {path:"list" , component : EmployeeListComponent },
  {path:"create" , component : EmployeeCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
