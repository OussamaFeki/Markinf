import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneprodComponent } from './oneprod.component';

const routes: Routes = [
  {path:'',component:OneprodComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneprodRoutingModule { }
