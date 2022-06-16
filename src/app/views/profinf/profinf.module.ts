import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfinfRoutingModule } from './profinf-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfinfComponent } from './profinf.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ProfinfComponent],
  imports: [
    CommonModule,
    ProfinfRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class ProfinfModule { }
