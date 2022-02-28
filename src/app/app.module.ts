import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutsModule } from './layouts/layouts.module';
import { SigninUpComponent } from './signin-up/signin-up.component';
import { CreateComponent } from './create/create.component';
import {HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { InfisComponent } from './views/manpage/infis/infis.component';
import { ProduitsComponent } from './views/manpage/produits/produits.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    SigninUpComponent,
    CreateComponent,
    InfisComponent,
    ProduitsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
