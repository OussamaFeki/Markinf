import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareserviceService } from 'src/app/services/shareservice.service';


@Component({
  selector: 'app-infis',
  templateUrl: './infis.component.html',
  styleUrls: ['./infis.component.css']
})
export class InfisComponent implements OnInit ,OnDestroy {
obj:Subscription
list:any
  constructor(private share:ShareserviceService) {
    this.obj=this.share.getallinf().subscribe(data=>this.list=data)
   }
  
  ngOnInit(): void {
  }
  del(id:any,i:any){
    this.share.deleteinf(id).subscribe((data)=>{
      console.log(data);
      this.list.splice(i,1)
    })

  }
  ngOnDestroy(): void {
  this.obj.unsubscribe()
  }
}
