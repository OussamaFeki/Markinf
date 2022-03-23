import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigaccountRoutingModule } from './configaccount-routing.module';
import { ConfigaccountComponent } from './configaccount.component';


@NgModule({
  declarations: [ConfigaccountComponent],
  imports: [
    CommonModule,
    ConfigaccountRoutingModule
  ]
})
export class ConfigaccountModule { }
