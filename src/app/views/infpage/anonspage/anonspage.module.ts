import { environment } from './../../../../environments/environment.prod';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnonspageRoutingModule } from './anonspage-routing.module';
import { AnonspageComponent } from './anonspage.component';
// import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [AnonspageComponent],
  imports: [
    CommonModule,
    AnonspageRoutingModule,
    //ServiceWorkerModule.register('ngsw-worker.js',{enabled:environment.production})
  ]
})
export class AnonspageModule { }
