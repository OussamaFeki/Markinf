import { SigninUpComponent } from './signin-up/signin-up.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './manager/manager.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { ListofinfComponent } from './manager/listofinf/listofinf.component';
import { LproduitComponent } from './influencer/lproduit/lproduit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProdComponent } from './prod/prod.component';
import { NinpageComponent } from './ninpage/ninpage.component';
import { AnnoncepageComponent } from './annoncepage/annoncepage.component';
import { MessagesComponent } from './messages/messages.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListComponent } from './prod/list/list.component';
import { NinComponent } from './ninpage/nin/nin.component';
import { MesslistComponent } from './messages/messlist/messlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signin-up/signup/signup.component';
import { AnnonceComponent } from './views/infpage/annonce/annonce.component';
import { MessComponent } from './views/infpage/mess/mess.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninUpComponent,
    ManagerComponent,
    InfluencerComponent,
    ListofinfComponent,
    LproduitComponent,
    NavbarComponent,
    ProdComponent,
    NinpageComponent,
    AnnoncepageComponent,
    MessagesComponent,
    NotfoundComponent,
    ListComponent,
    NinComponent,
    MesslistComponent,
    SignupComponent,
    AnnonceComponent,
    MessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
