import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnepupComponent } from './onepup.component';

const routes: Routes = [
  {path:'',component:OnepupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnepupRoutingModule { }
