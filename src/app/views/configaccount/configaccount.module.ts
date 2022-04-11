import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SocialAuthServiceConfig,SocialAuthService,SocialLoginModule} from 'angularx-social-login'
import {FacebookLoginProvider} from 'angularx-social-login'
import { ConfigaccountRoutingModule } from './configaccount-routing.module';
import { ConfigaccountComponent } from './configaccount.component';


@NgModule({
  declarations: [ConfigaccountComponent],
  imports: [
    CommonModule,
    ConfigaccountRoutingModule,
    ReactiveFormsModule
  ],providers:[
    {
     provide:'SocialAuthServiceConfig',
     useValue:{
       autologin:false,
       providers:[
         {
           id:FacebookLoginProvider.PROVIDER_ID,
           provider:new FacebookLoginProvider("3164118630511097"),
         }
       ],
       onerror:(err:any)=>{
         console.log(err)
       },
     } as SocialAuthServiceConfig,
  },SocialAuthService,
]
})
export class ConfigaccountModule { }
