import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ConfigaccountModule { }
