import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CranonRoutingModule } from './cranon-routing.module';
import { CranonComponent } from './cranon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CranonComponent],
  imports: [
    CommonModule,
    CranonRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule
  ]
})
export class CranonModule { }
