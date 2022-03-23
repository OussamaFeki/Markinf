import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareserviceService } from 'src/app/services/shareservice.service';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit ,OnDestroy {
list:any
obj:Subscription
constructor(private share:ShareserviceService) {
  this.obj=this.share.getallman().subscribe(doc=>this.list=doc)
 }

ngOnInit(): void {
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
    })
  }
}
