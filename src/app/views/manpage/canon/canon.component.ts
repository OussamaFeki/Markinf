import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-canon',
  templateUrl: './canon.component.html',
  styleUrls: ['./canon.component.css']
})
export class CanonComponent implements OnInit {
 myform:any
  constructor(private route:Router,private formbuild:FormBuilder) {
    this.myform=this.formbuild.group({
      name:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
 tocreate(){
   this.route.navigate(['manager/anonce/create_annonce'])
 }
 toaddprod(){
   this.route.navigate(['manager/anonce/addprod'])
 }
 add(){}
}
