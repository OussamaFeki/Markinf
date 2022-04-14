import { Observable, Subscription } from 'rxjs';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { ShareserviceService } from 'src/app/services/shareservice.service';
import { AuthoAdminService } from 'src/app/services/autho-admin.service';
import { AuthoManService } from 'src/app/services/autho-man.service';
import io from 'socket.io-client'
 
@Component({
  selector: 'app-newinf',
  templateUrl: './newinf.component.html',
  styleUrls: ['./newinf.component.css']
})
export class NewinfComponent implements OnInit,OnDestroy {
  list:any
  obj:Subscription
  id_man:any
  p: number = 1;
  socket:any
  constructor(private share:ShareserviceService,private auth:AuthoManService) {
     this.id_man=this.auth.getprof().id
     this.socket=io('http://localhost:3000')
      this.obj=this.share.boiteinvit(this.id_man).subscribe((data:any)=> {
       this.list=data
         console.log(this.list)
       })
         
   }

  ngOnInit(): void {
    this.obj=this.listen(`data ${this.id_man}`).subscribe((data:any)=>{
      this.list=data
     })
  }
  accepter(id:any,i:any){
   this.share.addinfs(this.id_man,id).subscribe((data:any)=>{
     console.log(data)
     console.log('accepted')
   },(err)=>{
     console.log(err)
   })
   this.share.addmans(this.id_man,id).subscribe((data:any)=>{
     console.log(data)
   })
   this.auth.refuse(this.id_man,id).subscribe((data:any)=>{
    console.log(data)
    this.list.splice(i,1)
  },(err)=>{
    console.log(err)
  })
  }
  refuse(id:any,i:any){
    this.auth.refuse(this.id_man,id).subscribe((data:any)=>{
      console.log(data)
      console.log('refused')
      this.list.splice(i,1)
    },(err)=>{
      console.log(err)
    })
  }
  ngOnDestroy(): void {
      this.obj.unsubscribe()
  }
  listen(eventName:any){
    return new Observable((sub:any)=>{
      this.socket.on(eventName,(data:any)=>{
      sub.next(data)
      })
    })
  }
}
