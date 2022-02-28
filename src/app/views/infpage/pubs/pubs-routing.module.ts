import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PubsComponent } from './pubs/pubs.component';

const routes: Routes = [
  {path:'',component:PubsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PubsRoutingModule { }
