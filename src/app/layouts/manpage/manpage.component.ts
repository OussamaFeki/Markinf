import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthoManService } from 'src/app/services/autho-man.service';
import { ShareserviceService } from 'src/app/services/shareservice.service';
// import io from 'socket.io-client'
// const socket=io('http://localhost:3000')
@Component({
  selector: 'app-manpage',
  templateUrl: './manpage.component.html',
  styleUrls: ['./manpage.component.css']
})
export class ManpageComponent implements OnInit {
  username:any
  id:any
  prof:any
  myForm:any
  address:any
  countnotif:any
  constructor(private route:Router,private auth:AuthoManService,private share:ShareserviceService,private formbuilder:FormBuilder) {
    this.username=this.auth.getprof().fullname
    this.id=this.auth.getprof().id
    this.share.getman(this.id).subscribe(doc=>this.prof=doc)
    console.log(this.auth.IsloggedIn())
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
       this.route.navigateByUrl(`/manager/influencers${this.address}`)
    }else{
      this.route.navigate(['/manager/influencers'])}
   }
}
