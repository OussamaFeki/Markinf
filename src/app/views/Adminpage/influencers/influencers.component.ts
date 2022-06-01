import { HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthoAdminService } from 'src/app/services/autho-admin.service';
import { AuthoInfService } from 'src/app/services/autho-inf.service';
import { AuthoManService } from 'src/app/services/autho-man.service';
import { ShareserviceService } from 'src/app/services/shareservice.service';
import io from 'socket.io-client'
import { FbserveService } from 'src/app/services/fbserve.service';
@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html',
  styleUrls: ['./influencers.component.css']
})
export class InfluencersComponent implements OnInit ,OnDestroy {
  obj:Subscription
  list:any
  search:any
  myForm:any
  condition:any
  mancond:any
  id:any
  invit:any=[]
  accept:any=[]
  wait:any=[]
  p: number = 1;
  itemsofpage:number=5;
  socket:any
  numberfriend:any=[]
  constructor(private share:ShareserviceService,
    private route:ActivatedRoute,
    private auth:AuthoAdminService,
    private formbuilder:FormBuilder,
    private router:Router,
    private auth2:AuthoInfService,
    private auth1:AuthoManService,
    private fbs:FbserveService
    ){
    this.route.queryParams.subscribe(params=>{
      console.log(params.fullname)
      if (params.fullname!=undefined){
      this.search=params.fullname
    }
      else{
        this.search=''
      }
      this.obj=this.share.getinf(this.search).subscribe((doc:any)=>{
        this.list=doc
        for(let i in this.list){
          if(this.list[i].facebookId){
           this.fbs.numberoffriend(this.list[i].facebookId,this.list[i].accesstoken).subscribe((res:any)=>{
           this.numberfriend[i]=res.friends.summary.total_count
           })
          }else{this.numberfriend[i]=0}
        }
        if(this.mancond){
          this.id=this.auth1.getprof().id
          for(let i in this.list){
            this.isinvit(this.list[i]._id,i)
            this.accepted(this.list[i]._id,i)
            this.waiting(this.list[i]._id,i)
          }
        }
        this.socket=io('http://localhost:3000')
       }
       )
    })
    this.myForm=this.formbuilder.group({
      fullname:['']
    })
    this.condition=this.auth.IsloggedIn()
    this.mancond=this.auth1.IsloggedIn()
    this.obj=this.share.getinf(this.search).subscribe((doc:any)=>{
      this.list=doc
      if(this.mancond){
        this.id=this.auth1.getprof().id
        for(let i in this.list){
          this.isinvit(this.list[i]._id,i)
          this.accepted(this.list[i]._id,i)
          this.waiting(this.list[i]._id,i)
        }
      }
     }
     )
    
    
    
  }

  ngOnInit(): void {
    // for(let i in this.list){
    //   this.isinvit(this.list[i]._id,i)
    //   this.accepted(this.list[i]._id,i)
    //   this.waiting(this.list[i]._id,i)
    // }
    
  }
 ngOnDestroy(): void {
  this.obj.unsubscribe()
    
  }

 del(id:any,i:any){
  this.share.deleteinf(id).subscribe((data)=>{
    console.log(data);
    this.list.splice(i,1)
    this.numberfriend.splice(i,1)
    this.share.dellistnewman(id).subscribe((doc)=>{
      console.log(doc)
    })
  })
 }
 chearch(){
  this.obj=this.share.getinf(this.myForm.get('fullname').value).subscribe(doc=>this.list=doc)
 }
 
 toprofinf(id:any){
  this.router.navigateByUrl('/admin/profile/'+id)
 }
 invitation(id_inf:any,i:any){
  if(this.id){
  this.auth1.invitinf(id_inf,this.id).subscribe(doc=>
    {console.log(doc)
     this.invit[i]=true 
     if(this.invit[i]&this.wait[i]){
      this.share.addinfs(this.id,this.list[i]._id).subscribe(doc=>{console.log(doc)})
      this.share.addmans(this.id,this.list[i]._id).subscribe(doc=>{console.log(doc)})
    }  
    },
  (err:HttpErrorResponse)=>{console.log(err)})
  }
 }
isinvit(id_inf:any,i:any){
  this.auth1.invited(id_inf,this.id).subscribe(doc=>{
    this.invit[i]=doc 
  })
}
desinvit(id_inf:any,i:any){
  this.auth2.refuse(id_inf,this.id).subscribe(doc=>{
    this.invit[i]=false
    console.log(doc)
  })
}
accepted(id_inf:any,i:any){
  this.auth1.accepted(this.id,id_inf).subscribe(doc=>{
    this.accept[i]=doc 
  })
}
waiting(id_inf:any,i:any){
this.auth2.invited(this.id,id_inf).subscribe(doc=>{
  this.wait[i]=doc 
  })}

}
