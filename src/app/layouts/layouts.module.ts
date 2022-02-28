import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManpageComponent } from './manpage/manpage.component';
import { InfpageComponent } from './infpage/infpage.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ManpageComponent,
    InfpageComponent,
    FrontpageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class LayoutsModule { }
