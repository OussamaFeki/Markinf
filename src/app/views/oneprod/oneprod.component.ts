import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareserviceService } from 'src/app/services/shareservice.service';

@Component({
  selector: 'app-oneprod',
  templateUrl: './oneprod.component.html',
  styleUrls: ['./oneprod.component.css']
})
export class OneprodComponent implements OnInit {
  id:any
  item:any
  constructor(private route:ActivatedRoute,private share:ShareserviceService) {
    this.route.params.subscribe((res)=>{
      this.id=res.id
      console.log(this.id)})
    this.share.getprod(this.id).subscribe(data=>this.item=data)
   }

  ngOnInit(): void {
  }

}
