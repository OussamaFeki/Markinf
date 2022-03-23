import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthoManService } from 'src/app/services/autho-man.service';
import { ShareserviceService } from 'src/app/services/shareservice.service';


@Component({
  selector: 'app-infis',
  templateUrl: './infis.component.html',
  styleUrls: ['./infis.component.css']
})
export class InfisComponent implements OnInit ,OnDestroy {
obj:Subscription
list:any
id_man:any
  constructor(private auth:AuthoManService ,private share:ShareserviceService ) {
    this.id_man=this.auth.getprof().id
    this.obj=this.auth.getinfsofman(this.id_man).subscribe((data:any)=>this.list=data)
   }
  
  ngOnInit(): void {
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
  ngOnDestroy(): void {
  this.obj.unsubscribe()
  }
}
