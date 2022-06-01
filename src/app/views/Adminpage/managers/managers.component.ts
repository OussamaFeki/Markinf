import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AuthoAdminService } from 'src/app/services/autho-admin.service';
import { AuthoInfService } from 'src/app/services/autho-inf.service';
import { AuthoManService } from 'src/app/services/autho-man.service';
import { ShareserviceService } from 'src/app/services/shareservice.service';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit ,OnDestroy {
list:any
search:any
obj:Subscription
condition:any
infcond:any
id:any
invit:any=[]
accept:any=[]
wait:any=[]
p: number = 1;
obs:any
itemsofpage:number=5;
constructor(private share:ShareserviceService,private route:ActivatedRoute,private auth:AuthoAdminService
  ,private auth1:AuthoInfService
  ,private auth2:AuthoManService,
  private router:Router,
  
  ) {
  this.route.queryParams.subscribe(params=>{
    if (params.fullname!=undefined){
    this.search=params.fullname}
    else{
      this.search=''
    }
    // this.obs=new Observable()
    
    this.obj=this.share.searchman(this.search).subscribe((doc:any)=>{
      this.list=doc
      // list$=this.list
      // console.log(list$)
      if(this.infcond){
        this.id=this.auth1.getprof().id
        for(let i in this.list){
          this.isinvit(this.list[i]._id,i)
          this.accepted(this.list[i]._id,i)
          this.waiting(this.list[i]._id,i)
          if(this.invit[i]&this.wait[i]){
            this.share.addinfs(this.list[i]._id,this.id).subscribe(doc=>{console.log(doc)})
            this.share.addmans(this.list[i]._id,this.id).subscribe(doc=>{console.log(doc)})
          }
        }
      }
     } )
  })
  this.condition=this.auth.IsloggedIn()
  this.infcond=this.auth1.IsloggedIn()
  this.obj=this.share.searchman(this.search).subscribe((doc:any)=>{
    this.list=doc
    if(this.infcond){
      this.id=this.auth1.getprof().id
      for(let i in this.list){
        this.isinvit(this.list[i]._id,i)
        this.accepted(this.list[i]._id,i)
        this.waiting(this.list[i]._id,i)
      }
    }
   } )
  
  
   
}
ngOnInit(): void {
  for(let i in this.list){
    if(this.invit[i]&this.wait[i]){
      this.share.addinfs(this.list[i]._id,this.id).subscribe(doc=>{console.log(doc)})
      this.share.addmans(this.list[i]._id,this.id).subscribe(doc=>{console.log(doc)})
    }
  }
}
ngOnDestroy(): void {
  this.obj.unsubscribe()
    
}
del(id:any,i:any){
    this.share.delman(id).subscribe((data)=>{
      console.log(data);
      this.list.splice(i,1);
      this.share.dellistnewinf(id).subscribe((dat)=>{
        console.log(dat)
      })
      this.share.deletepordsofman(id).subscribe((doc)=>{
        console.log(doc)
      })
    })
}
invitation(id_man:any,i:any){
  if(this.id){
  this.auth1.invitman(id_man,this.id).subscribe(doc=>
    {console.log(doc)
     this.invit[i]=true
     if(this.invit[i]&this.wait[i]){
      this.share.addinfs(this.list[i]._id,this.id).subscribe(doc=>{console.log(doc)})
      this.share.addmans(this.list[i]._id,this.id).subscribe(doc=>{console.log(doc)})
    }   
    },
  (err:HttpErrorResponse)=>{console.log(err)})
  }
}
isinvit(id_man:any,i:any){
 this.auth1.invited(id_man,this.id).subscribe(doc=>{
   this.invit[i]=doc 
 })

}
desinvit(id_man:any,i:any){
 this.auth2.refuse(id_man,this.id).subscribe(doc=>{
   this.invit[i]=false
   console.log(doc)
 })
}
toprofman(id:any){
  this.router.navigateByUrl('/admin/man/'+id)
}
accepted(id_man:any,i:any){
  this.auth2.accepted(id_man,this.id).subscribe(doc=>{
    this.accept[i]=doc 
  })
}
waiting(id_man:any,i:any){
  this.auth2.invited(this.id,id_man).subscribe(doc=>{
    this.wait[i]=doc 
  })
}
}
