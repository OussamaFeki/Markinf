import { AuthoManService } from 'src/app/services/autho-man.service';
import { AuthoInfService } from 'src/app/services/autho-inf.service';
import { Component, OnInit } from '@angular/core';
import { AuthoAdminService } from 'src/app/services/autho-admin.service';
import { FormBuilder, Validators } from '@angular/forms';
import { SocialAuthService,FacebookLoginProvider } from 'angularx-social-login';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-configaccount',
  templateUrl: './configaccount.component.html',
  styleUrls: ['./configaccount.component.css']
})
export class ConfigaccountComponent implements OnInit {
  isinf:boolean=false
  isadm:boolean=false
  isman:boolean=false  
  myform:any
  id:any
  item:any
  profile:any
  prof:boolean=false
  constructor(private authinf:AuthoInfService,
    private authman: AuthoManService,
    private authadm:AuthoAdminService ,
    private formbuild:FormBuilder) {
   this.isinf=this.authinf.IsloggedIn()
   this.isadm=this.authadm.IsloggedIn()
   this.isman=this.authman.IsloggedIn() 
   
   if(this.isinf){
     this.id=this.authinf.getprof().id
     this.authinf.getinf(this.id).subscribe((doc:any)=>{this.item=doc;
      console.log(this.item.image);
      this.profile=doc.profile
      if(this.profile!=undefined){
        this.prof=true
      }
      console.log(this.profile)
      })
   }
   if(this.isadm){
     this.id=this.authadm.getprof().id
   }
   if(this.isman){
     this.id=this.authman.getprof().id
     this.authman.getman(this.id).subscribe((doc:any)=>{this.item=doc;
      console.log(this.item.image)
      })
   }
   console.log(this.isinf)
    this.myform=this.formbuild.group({
     oldpass:['',Validators.required],
     newpass:['',Validators.required],
   })
  }

  ngOnInit(): void {

  }
  change(){
    if(this.isman){
    this.authman.config(this.id,this.myform).subscribe(doc=>{
      console.log(doc)
    },err=>console.log(err))
    }
    if(this.isadm){
      
    }
    if(this.isinf){
      
    }
  }
}
