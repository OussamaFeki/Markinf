import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ShareserviceService } from 'src/app/services/shareservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  obj:Subscription
  list:any
  totalLength:any;
  page:number=1;
  id:any
  constructor(private share :ShareserviceService,private route:Router,config: NgbModalConfig, private modalService: NgbModal) {
    this.obj=this.share.getallprod().subscribe((doc)=>{
      this.list=doc;
      // this.totalLength =doc.;
    })
    config.backdrop = 'static';
      config.keyboard = false;
   }
   del(id:any,i:any){
    this.share.deleteprod(id).subscribe(doc=>{
      console.log(doc)
      this.list.splice(i,1) 
    })
  }
  ngOnInit(): void {
  }
  detail(id:any){
    this.route.navigate(['manager/produit/'+id])
  }
  open(content:any,id:any) {
    this.modalService.open(content);
    this.id=id
  }
  
  update(f:any){
    let profile=f
    this.share.upprod(profile,this.id).subscribe(doc=>console.log(doc))
  }
}
