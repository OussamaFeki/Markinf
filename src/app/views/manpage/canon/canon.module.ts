import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanonRoutingModule } from './canon-routing.module';
import { CanonComponent } from './canon/canon.component';


@NgModule({
  declarations: [
    CanonComponent
  ],
  imports: [
    CommonModule,
    CanonRoutingModule
  ]
})
export class CanonModule { }
