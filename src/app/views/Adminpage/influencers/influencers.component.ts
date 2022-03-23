import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShareserviceService } from 'src/app/services/shareservice.service';

@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html',
  styleUrls: ['./influencers.component.css']
})
export class InfluencersComponent implements OnInit ,OnDestroy {
  obj:Subscription
  list:any
  search:any
  constructor(private share:ShareserviceService,private route:ActivatedRoute){
    this.route.queryParams.subscribe(params=>{
      console.log(params.fullname)
      if (params.fullname!=undefined){
      this.search=params.fullname}
      else{
        this.search=''
      }
    })
    this.obj=this.share.getinf(this.search).subscribe(doc=>this.list=doc)
   }

  ngOnInit(): void {
  }
ngOnDestroy(): void {
  this.obj.unsubscribe()
    
}
del(id:any,i:any){
  this.share.deleteinf(id).subscribe((data)=>{
    console.log(data);
    this.list.splice(i,1)
  })

}
}
