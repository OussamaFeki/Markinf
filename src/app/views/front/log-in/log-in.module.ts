import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SocialAuthServiceConfig,SocialAuthService,SocialLoginModule} from 'angularx-social-login'
import {FacebookLoginProvider} from 'angularx-social-login'
import { LogInRoutingModule } from './log-in-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { tokenToString } from 'typescript';

@NgModule({
  declarations: [
    LogInComponent,
  ],
  imports: [
    CommonModule,
    LogInRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SocialLoginModule
    
  ],
  providers:[
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
],bootstrap:[
  LogInComponent
]
})
export class LogInModule { }
