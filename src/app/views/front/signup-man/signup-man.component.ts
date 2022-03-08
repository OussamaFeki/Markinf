import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthoInfService } from 'src/app/services/autho-inf.service';
import { AuthoManService } from 'src/app/services/autho-man.service';

@Component({
  selector: 'app-signup-man',
  templateUrl: './signup-man.component.html',
  styleUrls: ['./signup-man.component.css']
})
export class SignupManComponent implements OnInit {
  myForm:any
  message:String=''
  erromessage:String=''
  constructor(private formbuilder:FormBuilder,private route:Router,private auth:AuthoManService,config: NgbModalConfig, private modalService: NgbModal) {
    this.myForm=this.formbuilder.group({
      email:["",[Validators.email,Validators.required]],
      password:["",Validators.required],
      fullname:["",Validators.required],
      repass:["",Validators.required]
    })
    config.backdrop = 'static';
    config.keyboard = false;
  }
  d(content:any){
    this.modalService.dismissAll(content)
    this.message=""
    this.erromessage=""
  }
  ngOnInit(): void {
  }
  register(content:any){
  let profile =this.myForm.value
  this.auth.RegMan(profile).subscribe((doc:any)=>{
    this.message=doc.msg
  },(err:HttpErrorResponse)=>{
    if(err.error.errors){
      this.erromessage=err.error.errors.msg
    }else
    {this.erromessage=err.error}})
   this.modalService.open(content);
}
}
