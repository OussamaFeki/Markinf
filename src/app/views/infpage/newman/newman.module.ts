import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewmanRoutingModule } from './newman-routing.module';
import { NewmanComponent } from './newman.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [NewmanComponent],
  imports: [
    CommonModule,
    NewmanRoutingModule,
    NgxPaginationModule
  ]
})
export class NewmanModule { }
