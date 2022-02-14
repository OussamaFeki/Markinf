import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManpageComponent } from './manpage/manpage.component';
import { InfpageComponent } from './infpage/infpage.component';
import { FrontpageComponent } from './frontpage/frontpage.component';



@NgModule({
  declarations: [
    ManpageComponent,
    InfpageComponent,
    FrontpageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
