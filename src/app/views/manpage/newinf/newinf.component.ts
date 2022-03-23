import { DashbordComponent } from './../../Adminpage/dashbord/dashbord.component';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ShareserviceService } from 'src/app/services/shareservice.service';
import { AuthoAdminService } from 'src/app/services/autho-admin.service';
import { AuthoManService } from 'src/app/services/autho-man.service';

@Component({
  selector: 'app-newinf',
  templateUrl: './newinf.component.html',
  styleUrls: ['./newinf.component.css']
})
export class NewinfComponent implements OnInit {
  list:any
  obj:Subscription
  id_man:any
  constructor(private share:ShareserviceService,private auth:AuthoManService) {
    this.id_man=this.auth.getprof().id
    this.obj=this.share.boiteinvit(this.id_man).subscribe((data:any)=> {
      this.list=data
    })
   }

  ngOnInit(): void {
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
}
