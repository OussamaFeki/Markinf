import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PubsRoutingModule } from './pubs-routing.module';
import { PubsComponent } from './pubs/pubs.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    PubsComponent
  ],
  imports: [
    CommonModule,
    PubsRoutingModule,
    NgxPaginationModule,
  ]
})
export class PubsModule { }
