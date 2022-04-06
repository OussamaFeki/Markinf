import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AuthoManService } from 'src/app/services/autho-man.service';
import { ShareserviceService } from 'src/app/services/shareservice.service';
import io from 'socket.io-client'
import { WebSocketService } from 'src/app/services/web-socket.service';
const socket=io('http://localhost:3000')
@Component({
  selector: 'app-infis',
  templateUrl: './infis.component.html',
  styleUrls: ['./infis.component.css']
})
export class InfisComponent implements OnInit ,OnDestroy {
obj:Subscription
list:any
id_man:any
p: number = 1;
  constructor(private auth:AuthoManService ,private share:ShareserviceService,private router:Router,private websocket:WebSocketService ) {
    this.id_man=this.auth.getprof().id
     this.obj=this.auth.getinfsofman(this.id_man).subscribe((data:any)=>{
       console.log(data)
       this.list=data})
    this.listen('event test').subscribe((data)=>{console.log(data)})
   }
  
  ngOnInit(): void {
    // this.listen('event test').subscribe((data)=>{console.log(data)})
  }
  fier(id:any,i:any){
    this.share.fireinf(this.id_man,id).subscribe((data:any)=>{
      console.log(data.msg)
      this.list.splice(i,1)
      this.share.firedinf(this.id_man,id).subscribe((data:any)=>{
        console.log(data.msg)
        this.list.splice(i,1)
      },(err:HttpErrorResponse)=>{
        console.log(err)
      })
    },(err:HttpErrorResponse)=>{
      console.log(err)
    })
  }
  del(id:any,i:any){
    this.share.deleteinf(id).subscribe((data)=>{
      console.log(data);
      this.list.splice(i,1)
    })

  }
  toprofinf(id:any){
    this.router.navigateByUrl('/manager/profile/'+id)
   }
  ngOnDestroy(): void {
  this.obj.unsubscribe()
  }
  listen(eventName:any){
    return new Observable((sub:any)=>{
      socket.on(eventName,(data:any)=>{
      sub.next(data)
      })
    })
  }
}
