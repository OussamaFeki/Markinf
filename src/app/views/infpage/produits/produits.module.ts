import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitsRoutingModule } from './produits-routing.module';
import { ProduitsComponent } from './produits/produits.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ProduitsComponent
  ],
  imports: [
    CommonModule,
    ProduitsRoutingModule,
    RouterModule,
    NgxPaginationModule,
  ]
})
export class ProduitsModule { }
