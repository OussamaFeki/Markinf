import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ShareserviceService } from 'src/app/services/shareservice.service';
@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css']
})
export class AddprodComponen implements OnInit {
  myForm:any
  
  constructor(private route:Router ,private formbuild:FormBuilder,private share:ShareserviceService) {
    this.myForm=this.formbuild.group({
      name:['',Validators.required],
      mark:['',Validators.required],
      image:['',Validators.required],
      description:['',Validators.required],
      price:['',Validators.required],
      tage:['',Validators.required]
      
    })
   }

  ngOnInit(): void {
  }
  add(){
    let profile=this.myForm.value
    this.share.addprod(profile).subscribe(doc=>console.log(doc))
    
  }
  tocranon(){
    this.route.navigate(['manager/anonce'])
  }
}
