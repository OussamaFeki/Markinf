import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManpageComponent } from './manpage/manpage.component';
import { InfpageComponent } from './infpage/infpage.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProduitsModule } from '../views/infpage/produits/produits.module';
import { IndexModule } from '../views/front/index/index.module';
import { CranonModule } from '../views/manpage/cranon/cranon.module';
import { SignUpModule } from '../views/front/sign-up/sign-up.module';
import { LogInModule } from '../views/front/log-in/log-in.module';
import { OneprodModule } from '../views/oneprod/oneprod.module';
import { AddprodModule } from '../views/manpage/addprod/addprod.module';
import { NewinfModule } from '../views/manpage/newinf/newinf.module';
import { InfisModule } from '../views/manpage/infis/infis.module';
import { ProductsModule } from '../views/manpage/products/products.module';
import { SignupManModule } from '../views/front/signup-man/signup-man.module';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ManagersModule } from '../views/Adminpage/managers/managers.module';
import { DashbordModule } from '../views/Adminpage/dashbord/dashbord.module';
import { InfluencersModule } from '../views/Adminpage/influencers/influencers.module';
import { ProfmanModule } from '../views/profman/profman.module';
import { ManofinfModule } from '../views/infpage/manofinf/manofinf.module';
import { ConfigaccountModule } from '../views/configaccount/configaccount.module';
import { ProfinfModule } from '../views/profinf/profinf.module';
import { NewmanModule } from '../views/infpage/newman/newman.module';
import { AnonspageModule } from '../views/infpage/anonspage/anonspage.module';
import { ProfileModule } from '../views/profile/profile.module';
import { PubsModule } from '../views/infpage/pubs/pubs.module';
import { OnepupModule } from '../views/onepup/onepup.module';
import { PubofinfModule } from '../views/manpage/pubofinf/pubofinf.module';




@NgModule({
  declarations: [
    ManpageComponent,
    InfpageComponent,
    FrontpageComponent,
    AdminpageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ProduitsModule,
    IndexModule,
    CranonModule,
    LogInModule,
    SignUpModule,
    OneprodModule,
    AddprodModule,
    NewinfModule,
    InfisModule,
    ProductsModule,
    OneprodModule,
    SignupManModule,
    ManagersModule,
    DashbordModule,
    InfluencersModule,
    ProfmanModule,
    ManofinfModule,
    ConfigaccountModule,
    ProfinfModule,
    NewmanModule,
    AnonspageModule,
    ProfileModule,
    PubsModule,
    OnepupModule,
    PubofinfModule,
  ]
})
export class LayoutsModule { }
