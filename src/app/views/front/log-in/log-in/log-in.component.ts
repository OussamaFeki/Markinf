import { AuthoManService } from 'src/app/services/autho-man.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthoInfService } from 'src/app/services/autho-inf.service';
import { AuthoAdminService } from 'src/app/services/autho-admin.service';
import { FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';
import { isToken } from 'typescript';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  myForm1:any
  data:any
  erromessage:any='';
  FB:any
  
  constructor(private route:Router,
    private formbuilder:FormBuilder,
    private auth:AuthoInfService,
    private aut:AuthoManService,
    private modalService: NgbModal,
    private authadmin:AuthoAdminService,
    private authService:SocialAuthService) { 
    this.myForm1=this.formbuilder.group({
      mail:['',[Validators.email,Validators.required]],
      pass:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user)=>{
      console.log(user)
    })
  }
  submitLogin(){
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
  }
  d(content:any){
    this.modalService.dismissAll(content)
    this.erromessage=""
  }
  toinfluancer(){
    this.route.navigate(['/influencer'])
    }
    tomanager(){
    this.route.navigate(['/manager'])
    }
    toadmin(){
      this.route.navigate(['/admin'])
    }
   login(f:any,content:any){
    let profile=f.value
 this.auth.signin(profile).subscribe(doc=>{
   this.data=doc
   this.auth.issavetoken(this.data.token)
   if(this.auth.IsloggedIn()){
   this.toinfluancer()
   }
 },err=>{
    // console.log(err)
    // this.erromessage=err.error
    // this.modalService.open(content);
    this.aut.signin(profile).subscribe(doc=>{
      this.data=doc
      this.aut.issavetoken(this.data.token)
      if(this.aut.IsloggedIn()){
        this.tomanager()
       }
    },err=>{
      this.authadmin.signin(profile).subscribe(doc=>{
        this.data=doc
        this.authadmin.issavetoken(this.data.token)
        if(this.authadmin.IsloggedIn()){
          this.toadmin()
         }
      },err=>{
       console.log(err)
       this.erromessage=err.error
       this.modalService.open(content);
      })
    })      
 })
    
  }
  // loginfb(){
  //   this.auth.loginfb().subscribe(doc=>console.log(doc))
  // }
}
