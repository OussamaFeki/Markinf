import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfinfComponent } from './profinf.component';

const routes: Routes = [
  {path:'',component:ProfinfComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfinfRoutingModule { }
