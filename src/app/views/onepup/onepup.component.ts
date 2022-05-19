import { FbserveService } from 'src/app/services/fbserve.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthoInfService } from 'src/app/services/autho-inf.service';
import { AuthoManService } from 'src/app/services/autho-man.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-onepup',
  templateUrl: './onepup.component.html',
  styleUrls: ['./onepup.component.css']
})
export class OnepupComponent implements OnInit {
  id:any
  item:any={}
  id_inf:any
  fbid:any
  all:any
  full_pic:any
  message:any
  reactions:any
  like:any
  love:any
  acceptedpub:any
  isman:boolean=false
  id_man:any
  constructor(private route:ActivatedRoute,
    private auth:AuthoInfService,
    private fbs:FbserveService,
    private aut:AuthoManService,) {
    if (this.auth.IsloggedIn()){
      this.id_inf=this.auth.getprof().id
      this.route.params.subscribe((res)=>{
        this.id=res.id
        console.log(this.id)})
    }
    else{
      this.route.queryParams.subscribe((obs:any)=>{
        this.id=obs.idpub;
        this.id_inf=obs.id_inf
      })
    }
    this.isman=this.aut.IsloggedIn()
    if(this.isman){
      this.id_man=this.aut.getprof().id
    }
    this.auth.getinf(this.id_inf).subscribe((doc:any)=>{
      this.fbid=doc.facebookId
        if(this.fbid){
          this.fbs.getposts(this.fbid,doc.accesstoken).subscribe((res:any)=>{
           this.all=res.posts.data
           for(let i in this.all){
             if(this.id==this.all[i].id){
               this.item=this.all[i]
               this.full_pic=this.all[i].full_picture
               this.message=this.all[i].message
               this.reactioncount(this.id,doc.accesstoken)
               this.fbs.numberofLike(this.id,doc.accesstoken).subscribe((doc:any)=>{
                 this.like=doc.reactions.summary.total_count
               })
               this.fbs.numberoflove(this.id,doc.accesstoken).subscribe((doc:any)=>{
                 this.love=doc.reactions.summary.total_count
               })
               if(this.isman){
                this.isaccepted(this.item.id,this.id_man,this.item.full_picture)
               }
               
             }
           }
          })
        }
      })  
    }

  
  ngOnInit(): void {
  }
  reactioncount(postid:any,accesstoken:any){
    this.fbs.getreaction(postid,accesstoken).subscribe((doc:any)=>{
      this.reactions=doc.reactions.summary.total_count
    })
  }
  isaccepted(id:any,id_manager:any,fullpicture:any){
    this.aut.isaccpub(id,id_manager,fullpicture).subscribe(doc=>{
      
      this.acceptedpub=doc
      console.log(this.acceptedpub)
    },(err:HttpErrorResponse)=>{
      console.log(err)
    })
  }
  cancel(id:any,id_manager:any,fullpicture:any){
    this.aut.cancelpub(id,id_manager,fullpicture).subscribe(doc=>{
      console.log(doc)
      this.acceptedpub=false
    })
  }
  accepter(id:any,id_manager:any,fullpicture:any){
    this.aut.acceptpub(id,id_manager,fullpicture).subscribe((doc)=>{
    console.log(doc) 
    })
   console.log(id)
   this.acceptedpub=true
 }
}
