import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  myForm1:any
  constructor(private route:Router,private formbuilder:FormBuilder) { 
    this.myForm1=this.formbuilder.group({
      mail:['',[Validators.email,Validators.required]],
      pass:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
 print(){}
 toinfluancer(){
   this.route.navigate(['/influencer'])
 }
 tosignup(){
   this.route.navigate(['/sign_up'])
 }
 tomanager(){
   this.route.navigate(['manager'])
 }
}
