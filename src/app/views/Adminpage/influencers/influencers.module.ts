import { InfluencersComponent } from './influencers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfluencersRoutingModule } from './influencers-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [InfluencersComponent],
  imports: [
    CommonModule,
    InfluencersRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    NgxPaginationModule
  ]
})
export class InfluencersModule { }
