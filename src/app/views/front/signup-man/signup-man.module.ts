import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupManRoutingModule } from './signup-man-routing.module';
import { SignupManComponent } from './signup-man.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignupManComponent
  ],
  imports: [
    CommonModule,
    SignupManRoutingModule,
    ReactiveFormsModule
  ]
})
export class SignupManModule { }
