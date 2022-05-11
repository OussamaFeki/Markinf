import { Component, OnInit ,OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthoInfService } from 'src/app/services/autho-inf.service';
import { ShareserviceService } from 'src/app/services/shareservice.service';
import io from 'socket.io-client'
@Component({
  selector: 'app-newman',
  templateUrl: './newman.component.html',
  styleUrls: ['./newman.component.css']
})
export class NewmanComponent implements OnInit,OnDestroy {
  list:any=[]
  obj:Subscription;
  id_inf:any;
  p: number = 1;
  socket:any
  constructor(private share:ShareserviceService,private auth:AuthoInfService) {
    this.id_inf=this.auth.getprof().id
    this.socket=io('http://localhost:3000')
    this.obj=this.share.boiteinvitofinf(this.id_inf).subscribe((data:any)=> {
      this.list=data.doc
    }) }
  
  ngOnInit(): void {
    this.obj=this.listen(`datainf ${this.id_inf}`).subscribe((data:any)=>{
      this.list=data
     })
  }
 accepter(id:any,i:any){
  this.share.addinfs(id,this.id_inf).subscribe((data:any)=>{
    console.log(data)
    console.log('accepted')
  },(err)=>{
    console.log(err)
  })
  this.share.addmans(id,this.id_inf).subscribe((data:any)=>{
    console.log(data)
  })
  this.auth.refuse(this.id_inf,id).subscribe((data:any)=>{
    console.log(data)
    this.list.splice(i,1)
    console.log(this.list)
    this.share.boiteinvitofinf(this.id_inf).subscribe((data:any)=> {
      this.list=data.doc})
  },(err)=>{
    console.log(err)
  })
 
}
refuse(id:any,i:any){
  this.auth.refuse(this.id_inf,id).subscribe((data:any)=>{
    console.log(data)
    console.log('refused')
    this.list.splice(i,1)
    console.log(this.list)
    this.share.boiteinvitofinf(this.id_inf).subscribe((data:any)=> {
     this.list=data.doc})
  },(err)=>{
    console.log(err)
  })
  
}
ngOnDestroy(): void {
    
}
listen(eventName:any){
  return new Observable((sub:any)=>{
    this.socket.on(eventName,(data:any)=>{
    sub.next(data)
    })
  })
}
}
