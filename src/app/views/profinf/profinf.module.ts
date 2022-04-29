import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfinfRoutingModule } from './profinf-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfinfComponent } from './profinf.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ProfinfComponent],
  imports: [
    CommonModule,
    ProfinfRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ]
})
export class ProfinfModule { }
