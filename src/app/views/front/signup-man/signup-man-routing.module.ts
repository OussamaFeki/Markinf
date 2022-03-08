import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupManComponent } from './signup-man.component';

const routes: Routes = [
  {path:'',component:SignupManComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupManRoutingModule { }
