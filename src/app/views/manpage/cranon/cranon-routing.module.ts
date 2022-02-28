import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CranonComponent } from './cranon.component';

const routes: Routes = [
  {path:'',component:CranonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CranonRoutingModule { }
