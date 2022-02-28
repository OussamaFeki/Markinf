import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PubsRoutingModule } from './pubs-routing.module';
import { PubsComponent } from './pubs/pubs.component';


@NgModule({
  declarations: [
    PubsComponent
  ],
  imports: [
    CommonModule,
    PubsRoutingModule
  ]
})
export class PubsModule { }
