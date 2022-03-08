import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfisRoutingModule } from './infis-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InfisComponent } from './infis.component';

@NgModule({
  declarations: [InfisComponent],
  imports: [
    CommonModule,
    InfisRoutingModule,
    BrowserModule,
    FormsModule
  ]
})
export class InfisModule { }
