import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ShareserviceService } from 'src/app/services/shareservice.service';

@Component({
  selector: 'app-newinf',
  templateUrl: './newinf.component.html',
  styleUrls: ['./newinf.component.css']
})
export class NewinfComponent implements OnInit {
  list:any
  obj:Subscription
  constructor(private share:ShareserviceService) {
    this.obj=this.share.getallinf().subscribe(data=>this.list=data)
   }

  ngOnInit(): void {
  }

}
