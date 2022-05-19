import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShareserviceService } from 'src/app/services/shareservice.service';
import { Router } from '@angular/router';
import { AuthoInfService } from 'src/app/services/autho-inf.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit ,OnDestroy {
list:any;
listprods:any=[];
id:any
p:number=1
managers:any=[{}]
  constructor(private share :ShareserviceService,
    private route :Router,
    private auth:AuthoInfService
    ){
    this.id=this.auth.getprof().id
    this.producttoin(this.id)
   }
  
  ngOnInit(): void {
  }
  detail(id:any){
    this.route.navigate(['influencer/produit/'+id])
  }
  ngOnDestroy(): void {
      
  }
  producttoin(id:any){
    this.auth.getmansofinf(id).subscribe((data:any)=>{
      let j=0
      for( let i in data ){
        this.share.getprodman(data[i]._id).subscribe((doc:any)=>{
          for(let d in doc){
            this.listprods[j]=doc[d]
            this.managers[j]=data[i]
            j=j+1
          }
          })

      }
      console.log(this.listprods)
    })
  }
}
