import { OnepupComponent } from './onepup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnepupRoutingModule } from './onepup-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [OnepupComponent],
  imports: [
    CommonModule,
    OnepupRoutingModule,
    RouterModule
  ]
})
export class OnepupModule { }
