import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfluencersComponent } from './influencers.component';

const routes: Routes = [
  {path:'',component:InfluencersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfluencersRoutingModule { }
