import { InfluencersComponent } from './influencers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfluencersRoutingModule } from './influencers-routing.module';


@NgModule({
  declarations: [InfluencersComponent],
  imports: [
    CommonModule,
    InfluencersRoutingModule
  ]
})
export class InfluencersModule { }
