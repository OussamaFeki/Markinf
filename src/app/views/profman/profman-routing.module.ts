import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfmanComponent } from './profman.component';

const routes: Routes = [
  {path:'',component:ProfmanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfmanRoutingModule { }
