import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 myForm:any
  constructor(private formbuilder:FormBuilder) {
    this.myForm=this.formbuilder.group({
      fullname:['',[Validators.required,Validators.minLength]],
      email:['',[Validators.required,Validators.email]],
      pass:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

}
