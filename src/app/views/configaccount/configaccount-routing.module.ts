import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigaccountComponent } from './configaccount.component';

const routes: Routes = [
  {path:'',component:ConfigaccountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigaccountRoutingModule { }
