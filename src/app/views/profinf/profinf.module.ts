import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfinfRoutingModule } from './profinf-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfinfComponent } from './profinf.component';


@NgModule({
  declarations: [ProfinfComponent],
  imports: [
    CommonModule,
    ProfinfRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ProfinfModule { }
