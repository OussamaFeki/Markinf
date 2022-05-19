import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { AddprodRoutingModule } from './addprod-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { AddprodComponen } from './addprod.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AddprodComponen],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AddprodRoutingModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:5000,
      easeTime:100,
    })
    
  ]
})
export class AddprodModule { }
