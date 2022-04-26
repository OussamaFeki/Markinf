import { FbserveService } from 'src/app/services/fbserve.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthoInfService } from 'src/app/services/autho-inf.service';

@Component({
  selector: 'app-onepup',
  templateUrl: './onepup.component.html',
  styleUrls: ['./onepup.component.css']
})
export class OnepupComponent implements OnInit {
  id:any
  item:any
  id_inf:any
  fbid:any
  all:any
  full_pic:any
  constructor(private route:ActivatedRoute,private auth:AuthoInfService,private fbs:FbserveService) {
    this.id_inf=this.auth.getprof().id
    this.route.params.subscribe((res)=>{
      this.id=res.id
      console.log(this.id)})
      this.auth.getinf(this.id_inf).subscribe((doc:any)=>{
        this.fbid=doc.facebookId
        if(this.fbid){
          this.fbs.getposts(this.fbid,doc.accesstoken).subscribe((res:any)=>{
           this.all=res.posts.data
           for(let i in this.all){
             if(this.id==this.all[i].id){
               this.item=this.all[i]
               console.log(this.all[i].full_picture)
               this.full_pic=this.all[i].full_picture
             }
           }
          })
        }
      })  
    }

  
  ngOnInit(): void {
  }

}
