import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PubofinfRoutingModule } from './pubofinf-routing.module';
import { PubofinfComponent } from './pubofinf.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [PubofinfComponent],
  imports: [
    CommonModule,
    PubofinfRoutingModule,
    BrowserModule,
    NgxPaginationModule 
  ]
})
export class PubofinfModule { }
