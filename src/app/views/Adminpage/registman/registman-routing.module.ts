import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistmanComponent } from './registman.component';

const routes: Routes = [
  {path:'',component:RegistmanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistmanRoutingModule { }
