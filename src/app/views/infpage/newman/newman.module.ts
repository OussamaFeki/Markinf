import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewmanRoutingModule } from './newman-routing.module';
import { NewmanComponent } from './newman.component';


@NgModule({
  declarations: [NewmanComponent],
  imports: [
    CommonModule,
    NewmanRoutingModule
  ]
})
export class NewmanModule { }
