import { Socket } from 'ngx-socket-io';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthoInfService } from 'src/app/services/autho-inf.service';
import io from 'socket.io-client'
import { Observable } from 'rxjs';
import { WebSocketService } from 'src/app/services/web-socket.service';
const socket=io('http://localhost:3000')
@Component({
  selector: 'app-infpage',
  templateUrl: './infpage.component.html',
  styleUrls: ['./infpage.component.css']
})
export class InfpageComponent implements OnInit {
  username:any
  id:any
  prof:any
  myForm:any
  address:any
  counter:any
  numberofnewman:any
  socket:any
  constructor(private auth:AuthoInfService,private route:Router,private formbuilder:FormBuilder) {
    this.myForm=this.formbuilder.group({
      fullname:['']
    })
    this.username=this.auth.getprof().fullname
    this.id=this.auth.getprof().id
    this.auth.getinf(this.id).subscribe(doc=>this.prof=doc)
    console.log(this.auth.IsloggedIn())
    
  }

  ngOnInit(): void {
   socket.on('data1',(res)=>{
     console.log(res)
   })
  }
  logout(){
   localStorage.clear()
   this.route.navigate(['/login'])
  }
  search(){
    this.address='?fullname='+this.myForm.get('fullname').value
    if(this.myForm.get('fullname').value){
       this.route.navigateByUrl(`/influencer/managers${this.address}`)
    }else{
      this.route.navigate(['/influencer/managers'])}
  }
}
