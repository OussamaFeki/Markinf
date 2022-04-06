import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewinfRoutingModule } from './newinf-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NewinfComponent } from './newinf.component';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [NewinfComponent],
  imports: [
    CommonModule,
    NewinfRoutingModule,
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
  ]
})
export class NewinfModule { }
