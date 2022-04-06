import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnonspageComponent } from './anonspage.component';

const routes: Routes = [
  {path:'',component:AnonspageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnonspageRoutingModule { }
