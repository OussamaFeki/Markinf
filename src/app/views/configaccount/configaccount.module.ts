import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigaccountRoutingModule } from './configaccount-routing.module';
import { ConfigaccountComponent } from './configaccount.component';


@NgModule({
  declarations: [ConfigaccountComponent],
  imports: [
    CommonModule,
    ConfigaccountRoutingModule,
    ReactiveFormsModule
  ]
})
export class ConfigaccountModule { }
