import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthoInfService } from '../services/autho-inf.service';
import { ShareserviceService } from '../services/shareservice.service';

@Component({
  selector: 'app-signin-up',
  templateUrl: './signin-up.component.html',
  styleUrls: ['./signin-up.component.css']
})
export class SigninUpComponent implements OnInit {
 
  data:any
  constructor(private route:Router,private auth:AuthoInfService ) {
   
  }

  ngOnInit(): void {
  }
  toinfluancer(){
  this.route.navigate(['/influencer'])
  }
  tomanager(){
  this.route.navigate(['/manager'])
  }
 print(f:any){
  let profile=f.value
  this.auth.signin(profile).subscribe(doc=>{
    this.data=doc
    this.auth.issavetoken(this.data.token)
    if(this.auth.getprof().role =='influencer'){
    this.toinfluancer()
    }
  },err=>console.log(err))
}
}
