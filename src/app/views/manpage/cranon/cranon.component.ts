import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cranon',
  templateUrl: './cranon.component.html',
  styleUrls: ['./cranon.component.css']
})
export class CranonComponent implements OnInit {
  myForm:any
  constructor(private route:Router,private formbuilder:FormBuilder) { 
    this.myForm=this.formbuilder.group({
      
    })
  }
   
  ngOnInit(): void {
  }
 add(){}
 toaddprod(){
  this.route.navigate(['manager/anonce/addprod'])
 }
}
