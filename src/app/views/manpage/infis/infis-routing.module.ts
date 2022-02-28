import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfisComponent } from './infis.component';

const routes: Routes = [
  {path:'',component:InfisComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfisRoutingModule { }
