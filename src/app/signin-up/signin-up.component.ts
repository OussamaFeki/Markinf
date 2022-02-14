import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-up',
  templateUrl: './signin-up.component.html',
  styleUrls: ['./signin-up.component.css']
})
export class SigninUpComponent implements OnInit {
 myForm1:any
  constructor(private route:Router,private formbuilder:FormBuilder) {
   this.myForm1=this.formbuilder.group({
      mail:['',[Validators.email,Validators.required]],
      pass:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  toinfluancer(){
  this.route.navigate(['/signin_up/influencer'])
  }
print(){

}
}
