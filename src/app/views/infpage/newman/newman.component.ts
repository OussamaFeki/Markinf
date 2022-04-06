import { Component, OnInit ,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthoInfService } from 'src/app/services/autho-inf.service';
import { ShareserviceService } from 'src/app/services/shareservice.service';

@Component({
  selector: 'app-newman',
  templateUrl: './newman.component.html',
  styleUrls: ['./newman.component.css']
})
export class NewmanComponent implements OnInit,OnDestroy {
  list:any
  obj:Subscription;
  id_inf:any;
  p: number = 1;
  constructor(private share:ShareserviceService,private auth:AuthoInfService) {this.id_inf=this.auth.getprof().id
    this.obj=this.share.boiteinvitofinf(this.id_inf).subscribe((data:any)=> {
      this.list=data
    }) }
  
  ngOnInit(): void {
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
  },(err)=>{
    console.log(err)
  })
 }
 refuse(id:any,i:any){
  this.auth.refuse(this.id_inf,id).subscribe((data:any)=>{
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
}
