import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitsRoutingModule } from './produits-routing.module';
import { ProduitsComponent } from './produits/produits.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProduitsComponent
  ],
  imports: [
    CommonModule,
    ProduitsRoutingModule,
    RouterModule
  ]
})
export class ProduitsModule { }
