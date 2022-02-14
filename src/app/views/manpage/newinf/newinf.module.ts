import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewinfRoutingModule } from './newinf-routing.module';
import { NewinfComponent } from './newinf/newinf.component';


@NgModule({
  declarations: [
    NewinfComponent
  ],
  imports: [
    CommonModule,
    NewinfRoutingModule
  ]
})
export class NewinfModule { }
