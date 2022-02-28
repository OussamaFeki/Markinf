import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddprodRoutingModule } from './addprod-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { AddprodComponen } from './addprod.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AddprodComponen],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AddprodRoutingModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    
  ]
})
export class AddprodModule { }
