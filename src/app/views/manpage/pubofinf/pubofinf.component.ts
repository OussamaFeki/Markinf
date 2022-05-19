import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthoInfService } from 'src/app/services/autho-inf.service';
import { AuthoManService } from 'src/app/services/autho-man.service';
import { CalculatorService } from 'src/app/services/calculator.service';
import { FbserveService } from 'src/app/services/fbserve.service';
import { ShareserviceService } from 'src/app/services/shareservice.service';

@Component({
  selector: 'app-pubofinf',
  templateUrl: './pubofinf.component.html',
  styleUrls: ['./pubofinf.component.css']
})
export class PubofinfComponent implements OnInit {
  list:any=[]
  all:any
  id:any
  fbid:any
  access:any
  list2:any=[]
  test:any
  listprods:any=[]
  pubids:any=[]
  p: number = 1;
  listlike:any=[]
  listlove:any=[];
  foraccepte:any=[];
  acceptedpub:any=[];
  influencer:any=[{}]
  constructor(
    private auth:AuthoInfService,
    private fbs:FbserveService,
    private share :ShareserviceService,
    private calcul:CalculatorService,
    private aut:AuthoManService,
    private router:Router,
  ) {
    this.id=this.auth.getprof().id
    this.products(this.id)
    this.pubsofinfs(this.id)
  }

  ngOnInit(): void {
  }
  pubsofinfs(id:any){
    this.aut.getinfsofman(id).subscribe((data:any)=>{
      var j=0
      console.log(data)
      for(let i in data){
        if(data[i].facebookId!=null){
          console.log(data[i].accesstoken)
          this.fbs.getposts(data[i].facebookId,data[i].accesstoken).subscribe((res:any)=>{
            this.all=res.posts.data
            for(let t in this.all){
              for(let l in this.listprods){
                if(this.all[t].message){
                  this.test=this.all[t].message
                  if(this.test.indexOf(`#${this.listprods[l].tag}`)!==-1){
                    this.list[j]=this.listprods[l]
                    this.pubids[j]=this.all[t].id
                    this.influencer[j]=data[i]
                    this.foraccepte[j]=this.all[t]
                    console.log(id)
                    console.log(this.list[j])
                    this.isaccepted(this.all[t].id,id,this.all[t].full_picture,j)
                    this.reactioncount(this.all[t].id,data[i].accesstoken,j)
                    this.lovecount(this.all[t].id,data[i].accesstoken,j)
                    this.likecount(this.all[t].id,data[i].accesstoken,j)
                    j=j+1
                  }
                }
              }
            }            
          })
        }
      }
      console.log(this.foraccepte)
      console.log(this.influencer)
    })
  }
  products(id:any){
    this.share.getprodman(id).subscribe((doc:any)=>{
      this.listprods=doc
      console.log(this.listprods)
    })
  }
  reactioncount(postid:any,accesstoken:any,i:any){
    this.fbs.getreaction(postid,accesstoken).subscribe((doc:any)=>{
      this.list2[i]=doc.reactions.summary.total_count
    })
   }
  likecount(postid:any,accesstoken:any,i:any){
    this.fbs.numberofLike(postid,accesstoken).subscribe((doc:any)=>{
      this.listlike[i]=doc.reactions.summary.total_count
    })
  }
  lovecount(postid:any,accesstoken:any,i:any){
    this.fbs.numberoflove(postid,accesstoken).subscribe((doc:any)=>{
      this.listlove[i]=doc.reactions.summary.total_count
      console.log(this.listlove[i])
    })
    
  }
  accepter(id:any,id_manager:any,fullpicture:any,i:any){
     this.aut.acceptpub(id,id_manager,fullpicture).subscribe((doc)=>{
     console.log(doc) 
     })
    console.log(id)
    this.acceptedpub[i]=true
  }
  isaccepted(id:any,id_manager:any,fullpicture:any,i:any){
    this.aut.isaccpub(id,id_manager,fullpicture).subscribe(doc=>{
      console.log(doc)
      this.acceptedpub[i]=doc
    },(err:HttpErrorResponse)=>{
      console.log(err)
    })
  }
  cancel(id:any,id_manager:any,fullpicture:any,i:any){
    this.aut.cancelpub(id,id_manager,fullpicture).subscribe(doc=>{
      console.log(doc)
      this.acceptedpub[i]=false
    })
  }
  detail(id:any,id_inf:any){
    this.router.navigate(['manager/pub'],{queryParams:{idpub:id,id_inf:id_inf}})
  }
}
