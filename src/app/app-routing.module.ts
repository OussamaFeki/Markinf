import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnoncepageComponent } from './annoncepage/annoncepage.component';
import { HomeComponent } from './home/home.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { ManagerComponent } from './manager/manager.component';
import { MessagesComponent } from './messages/messages.component';
import { NinpageComponent } from './ninpage/ninpage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProdComponent } from './prod/prod.component';
import { SigninUpComponent } from './signin-up/signin-up.component';
import { SignupComponent } from './signin-up/signup/signup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signin_up',children:[
    {path:'',component:SigninUpComponent},
    {path:'manager',children:[
      {path:'',component:ManagerComponent},
      {path:'produit',component:ProdComponent},
      {path:'ninf',component:NinpageComponent},
      {path:'anonce',component:AnnoncepageComponent},
      {path:'messages',component:MessagesComponent}
    ]},
    {path:'signup',component:SignupComponent},
    {path:'influencer',component:InfluencerComponent}
  ]},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
