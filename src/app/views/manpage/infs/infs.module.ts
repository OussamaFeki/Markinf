import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfsRoutingModule } from './infs-routing.module';
import { InfsComponent } from './infs/infs.component';


@NgModule({
  declarations: [
    InfsComponent
  ],
  imports: [
    CommonModule,
    InfsRoutingModule
  ]
})
export class InfsModule { }
