import { Component, OnInit } from '@angular/core';
import {  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css']
})
export class AddprodComponen implements OnInit {
  myForm:any
  constructor(private route:Router) {
    this.myForm= new FormGroup({
      name: new FormControl(''),
      mark: new FormControl(''),
    });
   }

  ngOnInit(): void {
  }
  add(){}
  tocranon(){
    this.route.navigate(['manager/anonce'])
  }
}
