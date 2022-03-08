import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneprodRoutingModule } from './oneprod-routing.module';
import { RouterModule } from '@angular/router';
import { OneprodComponent } from './oneprod.component';

@NgModule({
  declarations: [OneprodComponent],
  imports: [
    CommonModule,
    OneprodRoutingModule,
    RouterModule
  ]
})
export class OneprodModule { }
