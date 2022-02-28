import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  myForm:any
  constructor(private formbuilder:FormBuilder,private route:Router) {
    this.myForm=this.formbuilder.group({
      mail:["",[Validators.email,Validators.required]],
      pass:["",Validators.required],
      fname:["",Validators.required]
    })
   }

  ngOnInit(): void {
  }
  print(){}
  tologin(){
  this.route.navigate(['../../log_in'])
  }

}
