import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SocialAuthServiceConfig,SocialAuthService,SocialLoginModule} from 'angularx-social-login'
import {FacebookLoginProvider} from 'angularx-social-login'
import { ConfigaccountRoutingModule } from './configaccount-routing.module';
import { ConfigaccountComponent } from './configaccount.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [ConfigaccountComponent],
  imports: [
    CommonModule,
    ConfigaccountRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:5000,
      easeTime:100,
    })
  ]
})
export class ConfigaccountModule { }
