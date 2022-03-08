import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShareserviceService } from 'src/app/services/shareservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit ,OnDestroy {
list:any;
obj:Subscription;
  constructor(private share :ShareserviceService,private route :Router) {
    this.obj=this.share.getallprod().subscribe(doc=>this.list=doc)
   }
  
  ngOnInit(): void {
  }
  detail(id:any){
    this.route.navigate(['influencer/produit/'+id])
  }
  ngOnDestroy(): void {
      this.obj.unsubscribe()
  }
}
