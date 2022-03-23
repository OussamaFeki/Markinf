import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './layouts/adminpage/adminpage.component';
import { FrontpageComponent } from './layouts/frontpage/frontpage.component';
import { InfpageComponent } from './layouts/infpage/infpage.component';
import { ManpageComponent } from './layouts/manpage/manpage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GaurdManagGuard } from './views/guards/gaurd-manag.guard';
import { GuardadminGuard } from './views/guards/guardadmin.guard';
import { GuardloginGuard } from './views/guards/guardlogin.guard';
import { InfGuardGuard } from './views/guards/inf-guard.guard';



const routes: Routes = [
  {path:'',component:FrontpageComponent,canActivate:[GuardloginGuard],children:[
    {path:'',loadChildren:()=>import('./views/front/index/index-routing.module').then(m=>m.IndexRoutingModule)},
    {path:'login',loadChildren:()=>import('./views/front/log-in/log-in-routing.module').then(m=>m.LogInRoutingModule)},
    {path:'signup',loadChildren:()=>import('./views/front/sign-up/sign-up-routing.module').then(m=>m.SignUpRoutingModule)},
    {path:'man/signup',loadChildren:()=>import('./views/front/signup-man/signup-man-routing.module').then(m=>m.SignupManRoutingModule)}
  ]},
  {path:'admin',component:AdminpageComponent,canActivate:[GuardadminGuard],children:[
    {path:'',loadChildren:()=>import('./views/Adminpage/dashbord/dashbord-routing.module').then(m=>m.DashbordRoutingModule)},
    {path:'managers',loadChildren:()=>import('./views/Adminpage/managers/managers-routing.module').then(m=>m.ManagersRoutingModule)},
    {path:'influencers',loadChildren:()=>import('./views/Adminpage/influencers/influencers-routing.module').then(m=>m.InfluencersRoutingModule)},

  ]},
    {path:'manager',component:ManpageComponent,canActivate:[GaurdManagGuard],children:[
      {path:'',loadChildren:()=>import('./views/manpage/welcom/welcom-routing.module').then(m=>m.WelcomRoutingModule)},
      {path:'infs',loadChildren:()=>import('./views/manpage/infis/infis-routing.module').then(m=>m.InfisRoutingModule)},
      {path:'ninf',loadChildren:()=>import('./views/manpage/newinf/newinf-routing.module').then(m=>m.NewinfRoutingModule)},
      {path:'produits',loadChildren:()=>import('./views/manpage/products/products-routing.module').then(m=>m.ProductsRoutingModule)},
      {path:'produit/:id',loadChildren:()=>import('./views/oneprod/oneprod-routing.module').then(m=>m.OneprodRoutingModule)},
      {path:'profile',loadChildren:()=>import('./views/profman/profman-routing.module').then(m=>m.ProfmanRoutingModule)},
      {path:'anonce',children:[
        {path:'',loadChildren:()=>import('./views/manpage/cranon/cranon-routing.module').then(m=>m.CranonRoutingModule)},
        {path:'addprod',loadChildren:()=>import('./views/manpage/addprod/addprod-routing.module').then(m=>m.AddprodRoutingModule)}, 
      ]},
      {path:'config',loadChildren:()=>import('./views/configaccount/configaccount-routing.module').then(m=>m.ConfigaccountRoutingModule)},
      {path:'messages',loadChildren:()=>import('./views/manpage/message/message-routing.module').then(m=>m.MessageRoutingModule)},
    ]},
  {path:'influencer',component:InfpageComponent,canActivate:[InfGuardGuard],children:[
    {path:'',loadChildren:()=>import('./views/infpage/welcom/welcom-routing.module').then(m=>m.WelcomRoutingModule)},
    {path:'produits',loadChildren:()=>import('./views/infpage/produits/produits-routing.module').then(m=>m.ProduitsRoutingModule)},
    {path:'pub',loadChildren:()=>import('./views/infpage/pubs/pubs-routing.module').then(m=>m.PubsRoutingModule)},
    {path:'produit/:id',loadChildren:()=>import('./views/oneprod/oneprod-routing.module').then(m=>m.OneprodRoutingModule)},
    {path:'man/:id',loadChildren:()=>import('./views/profman/profman-routing.module').then(m=>m.ProfmanRoutingModule)},
    {path:'mans',loadChildren:()=>import('./views/infpage/manofinf/manofinf-routing.module').then(m=>m.ManofinfRoutingModule)},
    {path:'config',loadChildren:()=>import('./views/configaccount/configaccount-routing.module').then(m=>m.ConfigaccountRoutingModule)},
    {path:'profile',loadChildren:()=>import('./views/profinf/profinf-routing.module').then(m=>m.ProfinfRoutingModule)},
    {path:'newmans',loadChildren:()=>import('./views/infpage/newman/newman-routing.module').then(m=>m.NewmanRoutingModule)}
    ]}, 
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
