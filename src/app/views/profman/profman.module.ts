import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfmanRoutingModule } from './profman-routing.module';
import { RouterModule } from '@angular/router';
import { ProfmanComponent } from './profman.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ProfmanComponent],
  imports: [
    CommonModule,
    ProfmanRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ]
})
export class ProfmanModule { }
