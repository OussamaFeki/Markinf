import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm:any
  constructor(private formbuilder:FormBuilder) {
    this.myForm=this.formbuilder.group({
      mail:["",[Validators.email,Validators.required]],
      pass:["",Validators.required],
      fname:["",Validators.required]
    })
   }

  ngOnInit(): void {
  }
  print(){
    console.log(this.myForm)

  }
}
