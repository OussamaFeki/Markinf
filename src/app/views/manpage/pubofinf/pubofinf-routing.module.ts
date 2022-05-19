import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PubofinfComponent } from './pubofinf.component';

const routes: Routes = [
  {path:'',component:PubofinfComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PubofinfRoutingModule { }
