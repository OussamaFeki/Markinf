import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ShareserviceService } from 'src/app/services/shareservice.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  obj:Subscription
  list:any
  constructor(private share :ShareserviceService) {
    this.obj=this.share.getallprod().subscribe(doc=>this.list=doc)
   }
  
   del(id:any){
    this.share.deleteprod(id).subscribe(doc=>console.log(doc))
   }
  ngOnInit(): void {
  }
  
}
