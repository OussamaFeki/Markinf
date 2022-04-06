import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManofinfRoutingModule } from './manofinf-routing.module';
import { ManofinfComponent } from './manofinf.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ManofinfComponent],
  imports: [
    CommonModule,
    ManofinfRoutingModule,
    NgxPaginationModule
  ]
})
export class ManofinfModule { }
