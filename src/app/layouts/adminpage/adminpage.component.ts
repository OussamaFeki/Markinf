import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
 myForm:any
 address:any
  constructor(private route:Router,private formbuilder:FormBuilder) {
    this.myForm=this.formbuilder.group({
      fullname:['']
    })
  }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear()
    this.route.navigate(['/login'])
   }
   search(){
    this.address='?fullname='+this.myForm.get('fullname').value
    if(this.myForm.get('fullname').value){
       this.route.navigateByUrl(`/admin/managers${this.address}`)
    }else{
      this.route.navigate(['/admin/managers'])}
   }
}
