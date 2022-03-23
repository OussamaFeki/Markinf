import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManofinfRoutingModule } from './manofinf-routing.module';
import { ManofinfComponent } from './manofinf.component';


@NgModule({
  declarations: [ManofinfComponent],
  imports: [
    CommonModule,
    ManofinfRoutingModule
  ]
})
export class ManofinfModule { }
