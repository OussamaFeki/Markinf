import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersRoutingModule } from './managers-routing.module';
import { ManagersComponent } from './managers.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ManagersComponent],
  imports: [
    CommonModule,
    ManagersRoutingModule,
    NgxPaginationModule
  ]
})
export class ManagersModule { }
