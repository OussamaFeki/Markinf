import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthoInfService } from 'src/app/services/autho-inf.service';
import { AuthoManService } from 'src/app/services/autho-man.service';
import { ShareserviceService } from 'src/app/services/shareservice.service';

@Component({
  selector: 'app-manofinf',
  templateUrl: './manofinf.component.html',
  styleUrls: ['./manofinf.component.css']
})
export class ManofinfComponent implements OnInit {
 obj:Subscription;
 id:any;
 list:any
  constructor(private auth:AuthoInfService,private share:ShareserviceService) {
    this.id=this.auth.getprof().id
    this.obj=this.auth.getmansofinf(this.id).subscribe((data:any)=>this.list=data)
   }

  ngOnInit(): void {
  }
  fier(id:any,i:any){
    this.share.fireinf(id,this.id).subscribe((data:any)=>{
      console.log(data.msg)
      this.list.splice(i,1)
      this.share.firedinf(id,this.id).subscribe((data:any)=>{
        console.log(data.msg)
        this.list.splice(i,1)
      },(err:HttpErrorResponse)=>{
        console.log(err)
      })
    },(err:HttpErrorResponse)=>{
      console.log(err)
    })
  }
}
