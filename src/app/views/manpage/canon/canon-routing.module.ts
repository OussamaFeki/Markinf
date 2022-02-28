import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanonComponent } from './canon.component';

const routes: Routes = [
  {path:'',component:CanonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanonRoutingModule { }
