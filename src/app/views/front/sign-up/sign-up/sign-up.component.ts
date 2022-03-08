import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthoInfService } from 'src/app/services/autho-inf.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse, HttpResponse, HttpResponseBase } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  myForm:any
  message:String=''
  erromessage:String=''
  constructor(private formbuilder:FormBuilder,private route:Router,private auth:AuthoInfService,config: NgbModalConfig, private modalService: NgbModal) {
    this.myForm=this.formbuilder.group({
      email:["",[Validators.email,Validators.required]],
      password:["",Validators.required],
      fullname:["",Validators.required],
      repass:["",Validators.required]
    })
    config.backdrop = 'static';
    config.keyboard = false;
   }
   
  ngOnInit(): void {
  }
  d(content:any){
    this.modalService.dismissAll(content)
    this.message=""
    this.erromessage=""
  }
  
  register(content:any){
    let profile=this.myForm.value
    this.auth.Registry(profile).subscribe((doc:any)=>{
      console.log(doc.doc)
      this.route.navigate(['../signup'])
      this.message=doc.msg
    },(error:HttpErrorResponse)=>{console.log(error)
      if(error.error.errors){
        this.erromessage=error.error.errors.msg
      }else
      {this.erromessage=error.error}})
     this.modalService.open(content);
  }
}
