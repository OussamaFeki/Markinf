import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManofinfComponent } from './manofinf.component';

const routes: Routes = [
  {path:'',component:ManofinfComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManofinfRoutingModule { }
