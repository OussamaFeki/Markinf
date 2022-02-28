import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomRoutingModule } from './welcom-routing.module';
import { WelcomComponent } from './welcom/welcom.component';


@NgModule({
  declarations: [
    WelcomComponent
  ],
  imports: [
    CommonModule,
    WelcomRoutingModule
  ]
})
export class WelcomModule { }
