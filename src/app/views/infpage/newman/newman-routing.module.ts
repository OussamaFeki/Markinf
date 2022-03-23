import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewmanComponent } from './newman.component';

const routes: Routes = [
  {path:'',component:NewmanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewmanRoutingModule { }
