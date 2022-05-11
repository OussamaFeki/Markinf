import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthoManService } from 'src/app/services/autho-man.service';
import { ShareserviceService } from 'src/app/services/shareservice.service';
import io from 'socket.io-client'
import { Observable, Subscription } from 'rxjs';
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
  socket:any
  test:number=0
  image:any
  constructor(private route:Router,private auth:AuthoManService,private share:ShareserviceService,private formbuilder:FormBuilder) {
    this.username=this.auth.getprof().fullname
    this.id=this.auth.getprof().id
    this.socket=io('http://localhost:3000')
    this.share.getman(this.id).subscribe(doc=>{this.prof=doc
    this.image=this.prof.image
    console.log(this.id)
    this.share.boiteinvit(this.id).subscribe((res:any)=>{
      this.test=res.notif
    })
    })
    
    console.log(this.auth.IsloggedIn())
    this.myForm=this.formbuilder.group({
      fullname:['']
    })
   
   }

  ngOnInit(): void {
    this.listen(`notifman ${this.id}`).subscribe((data:any)=>{
      this.test=data
     })   
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
   listen(eventName:any){
    return new Observable((sub:any)=>{
      this.socket.on(eventName,(data:any)=>{
      sub.next(data)
      })
    })
  }
  desnotif(){
    this.test=0
    this.share.restnotif(this.id).subscribe(doc=>{
      console.log(doc)
    })
  }
}
