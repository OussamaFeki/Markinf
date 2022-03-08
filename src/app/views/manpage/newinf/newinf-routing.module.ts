import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewinfComponent } from './newinf.component';

const routes: Routes = [
  {path:'',component:NewinfComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewinfRoutingModule { }
