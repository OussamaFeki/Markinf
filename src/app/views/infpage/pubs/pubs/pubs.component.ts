import { FbserveService } from 'src/app/services/fbserve.service';
import { Subscriber } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthoInfService } from 'src/app/services/autho-inf.service';
import { ShareserviceService } from 'src/app/services/shareservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pubs',
  templateUrl: './pubs.component.html',
  styleUrls: ['./pubs.component.css']
})
export class PubsComponent implements OnInit {
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
  constructor(private auth:AuthoInfService,private fbs:FbserveService,private share :ShareserviceService,private route:Router) {
    this.id=this.auth.getprof().id
    console.log(this.id)
    this.producttoin(this.id)
    this.auth.getinf(this.id).subscribe((doc:any)=>{
      this.fbid=doc.facebookId
       if(this.fbid){
        this.fbs.getposts(this.fbid,doc.accesstoken).subscribe((res:any)=>{
          this.all=res.posts.data
          
           for(let i in this.all){
             for(let l in this.listprods){
               if(this.all[i].message){
                this.test=this.all[i].message
             let j=0
              if(this.test.indexOf(`#${this.listprods[l].tag}`)!==-1){ 
                this.list[j]=this.listprods[l]
                this.pubids[j]=this.all[i].id
                console.log(j)
                this.reactioncount(this.all[i].id,doc.accesstoken,j)
                j=j+1
              }
               }
              
             }
           }
          console.log(this.listprods) 
        })}
      })
   }

  ngOnInit(): void {
  }
  reactioncount(postid:any,accesstoken:any,i:any){
   this.fbs.getreaction(postid,accesstoken).subscribe((doc:any)=>{
     this.list2[i]=doc.reactions.summary.total_count
   })
  }
  producttoin(id:any){
    this.auth.getmansofinf(id).subscribe((data:any)=>{
      let j=0
      for( let i in data ){
        this.share.getprodman(data[i]._id).subscribe((doc:any)=>{
          for(let d in doc){
            this.listprods[j]=doc[d]
            j=j+1
          }
          })

      }
      console.log(this.listprods)
    })
  }
  detail(id:any){
    this.route.navigate(['influencer/pub/'+id])
  }
}
