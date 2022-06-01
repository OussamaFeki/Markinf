import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistmanRoutingModule } from './registman-routing.module';
import { RegistmanComponent } from './registman.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    RegistmanComponent
  ],
  imports: [
    CommonModule,
    RegistmanRoutingModule,
    NgxPaginationModule
  ]
})
export class RegistmanModule { }
