import { FbserveService } from 'src/app/services/fbserve.service';
import { Subscriber } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthoInfService } from 'src/app/services/autho-inf.service';
import { ShareserviceService } from 'src/app/services/shareservice.service';
import { Router } from '@angular/router';
import { CalculatorService } from 'src/app/services/calculator.service';
import { AuthoManService } from 'src/app/services/autho-man.service';


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
  listlike:any=[]
  listlove:any=[];
  listinteretforlove:any=[]
  listinteretforlike:any=[]
  accpted:boolean=false
  managers:any=[{}]
  constructor(private auth:AuthoInfService,
    private fbs:FbserveService,
    private share :ShareserviceService,
    private route:Router,
    private calcul:CalculatorService,
    private aut:AuthoManService) {
    this.id=this.auth.getprof().id
    console.log(this.id)
    this.producttoin(this.id)
    this.auth.getinf(this.id).subscribe((doc:any)=>{
      this.fbid=doc.facebookId
       if(this.fbid){
        this.fbs.getposts(this.fbid,doc.accesstoken).subscribe((res:any)=>{
          this.all=res.posts.data
          let j=0
           for(let i in this.all){
             for(let l in this.listprods){
               if(this.all[i].message){
                this.test=this.all[i].message
             
              if(this.test.indexOf(`#${this.listprods[l].tag}`)!==-1){ 
                this.auth.isaccpub(this.all[i].id,this.listprods[l].id_manager,this.all[i].full_picture).subscribe((resultat:any)=>{ 
                  this.accpted=resultat
                  if(this.accpted){
                    this.list[j]=this.listprods[l]
                    console.log(this.list[j])
                    this.pubids[j]=this.all[i].id
                    console.log(j)
                    this.reactioncount(this.all[i].id,doc.accesstoken,j)
                    this.lovecount(this.all[i].id,doc.accesstoken,j,this.listprods[l].id_manager)
                    this.likecount(this.all[i].id,doc.accesstoken,j,this.listprods[l].id_manager)
                    this.managerofprod(this.listprods[l].id_manager,j)
                    j=j+1
                  }
                })
              }
            }
              
          }
        }

          console.log(this.listprods) 
          console.log(this.list)
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
  intertofprod(id:any,i:any){
    this.aut.getman(id).subscribe((data:any)=>{
     this.listinteretforlove[i]=this.calcul.calculinteretlove(data.standard,this.listlove[i],data.foreachmultilove)
     // this.listinteretforlove[i]=this.calcul.calculinteretlove(12,this.listlove[i],data.foreachmultilove)
     console.log(this.listinteretforlove[i])
     
     })
   }
   lovecount(postid:any,accesstoken:any,i:any,id:any){
    this.fbs.numberoflove(postid,accesstoken).subscribe((doc:any)=>{
      this.listlove[i]=doc.reactions.summary.total_count
      this.intertofprod(id,i)
    })
    
  }
  intertofprodlikes(id:any,i:any){
    this.aut.getman(id).subscribe((data:any)=>{
      this.listinteretforlike[i]=this.calcul.calculinteretlove(data.standard,this.listlike[i],data.foreachmultilike)
      // this.listinteretforlove[i]=this.calcul.calculinteretlove(12,this.listlove[i],data.foreachmultilove)
      console.log(this.listinteretforlike[i])
      })
  }
  likecount(postid:any,accesstoken:any,i:any,id:any){
    this.fbs.numberofLike(postid,accesstoken).subscribe((doc:any)=>{
      this.listlike[i]=doc.reactions.summary.total_count
      this.intertofprodlikes(id,i)
    })
  }
   isaccepted(id:any,id_manager:any,image:any){
    this.auth.isaccpub(id,id_manager,image).subscribe((doc:any)=>{ 
     this.accpted=doc
    
    })
    
  }
  managerofprod(id:any,i:any){
    this.aut.getman(id).subscribe(doc=>{
      this.managers[i]=doc
      console.log( this.managers[i])
    })
  }

}
