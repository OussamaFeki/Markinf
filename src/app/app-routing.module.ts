import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { FrontpageComponent } from './layouts/frontpage/frontpage.component';
import { InfpageComponent } from './layouts/infpage/infpage.component';
import { ManpageComponent } from './layouts/manpage/manpage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SigninUpComponent } from './signin-up/signin-up.component';


const routes: Routes = [
  {path:'',component:FrontpageComponent,children:[
    {path:'',loadChildren:()=>import('./views/front/index/index-routing.module').then(m=>m.IndexRoutingModule)},
  ]},
    {path:'login',component:SigninUpComponent},
    {path:'signup',component:CreateComponent},
    {path:'manager',component:ManpageComponent,children:[
      {path:'',loadChildren:()=>import('./views/manpage/welcom/welcom-routing.module').then(m=>m.WelcomRoutingModule)},
      {path:'infs',loadChildren:()=>import('./views/manpage/infis/infis-routing.module').then(m=>m.InfisRoutingModule)},
      {path:'produit',loadChildren:()=>import('./views/manpage/produits/produits-routing.module').then(m=>m.ProduitsRoutingModule)},
      {path:'ninf',loadChildren:()=>import('./views/manpage/newinf/newinf-routing.module').then(m=>m.NewinfRoutingModule)},
      {path:'anonce',children:[
        {path:'',loadChildren:()=>import('./views/manpage/cranon/cranon-routing.module').then(m=>m.CranonRoutingModule)},
        {path:'addprod',loadChildren:()=>import('./views/manpage/addprod/addprod-routing.module').then(m=>m.AddprodRoutingModule)},
        
      ]},
      {path:'messages',loadChildren:()=>import('./views/manpage/message/message-routing.module').then(m=>m.MessageRoutingModule)},

    ]},
  {path:'influencer',component:InfpageComponent,children:[
    {path:'',loadChildren:()=>import('./views/infpage/welcom/welcom-routing.module').then(m=>m.WelcomRoutingModule)},
    {path:'produits',loadChildren:()=>import('./views/infpage/produits/produits-routing.module').then(m=>m.ProduitsRoutingModule)},
    {path:'pub',loadChildren:()=>import('./views/infpage/pubs/pubs-routing.module').then(m=>m.PubsRoutingModule)}
    ]}, 
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
