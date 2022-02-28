import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprodComponen } from './addprod.component';
const routes: Routes = [
  {path:'',component:AddprodComponen}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddprodRoutingModule { }
