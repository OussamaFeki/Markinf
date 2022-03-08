import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewinfRoutingModule } from './newinf-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NewinfComponent } from './newinf.component';




@NgModule({
  declarations: [NewinfComponent],
  imports: [
    CommonModule,
    NewinfRoutingModule,
    BrowserModule,
    FormsModule,
  ]
})
export class NewinfModule { }
