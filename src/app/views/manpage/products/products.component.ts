import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import { AuthoManService } from 'src/app/services/autho-man.service';
import { ShareserviceService } from 'src/app/services/shareservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {
  obj:Subscription
  list:any=[]
  totalLength:any;
  id:any;
  man:any
  man_id:any
  myForm:any
  filter:any
  p: number = 1;
  constructor(private share :ShareserviceService,private route:Router,config: NgbModalConfig, private modalService: NgbModal,private auth:AuthoManService,private formbuild:FormBuilder) {
      this.man_id=this.auth.getprof().id 
      this.obj=this.share.getprodman(this.man_id).subscribe((doc)=>{
      this.list=doc
      })
      this.myForm=this.formbuild.group({
        name:['',Validators.required],
        mark:[null,Validators.required],
        image:['',Validators.required],
        description:['',Validators.required],
        price:['',Validators.required], 
      })
      this.filter=this.formbuild.group({
        fullname:['']
      })
      config.backdrop = 'static';
      config.keyboard = true;
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
  open(content:any,id:any,name:any,desc:any,price:any,mark:any,img:any) {
    this.modalService.open(content);
    this.id=id
    this.myForm.patchValue({
      name:name,
      description:desc,
      price,
      image:img,
      mark
    })
  }
  selectImage(event:any){
    if(event.target.files.length >0){
      const file =event.target.files[0]
      this.myForm.patchValue({
        image:file
      });
      this.myForm.get('image')?.updateValueAndValidity()
    }
  }
  update(){
    const formData:any =new FormData();
    formData.append('name', this.myForm.get('name').value)
    formData.append('mark', this.myForm.get('mark').value)
    formData.append('image', this.myForm.get('image').value)
    formData.append('description', this.myForm.get('description').value)
    formData.append('price', this.myForm.get('price').value)
    // formData.append('tage', this.myForm.get('tage').value)
    // let profile=this.myForm.value
    // console.log(profile)
    this.share.upprod(formData,this.id).subscribe(doc=>{console.log(doc)
      this.share.getprodman(this.man_id).subscribe((res)=>{
        this.list=res
        })
    },(err:HttpErrorResponse)=>{console.log(err.message)})
  }
  ngOnDestroy(): void {
      this.obj.unsubscribe()
  }
  chearch(){
    // console.log(this.filter.get('fullname').value)
    //   this.share.searchprod(this.filter.get('fullname').value).subscribe(doc=>{this.list=doc
    //   console.log(doc)
    //   })
    
    this.share.searchprodforman(this.filter.get('fullname').value,this.man_id).subscribe(doc=>{this.list=doc
    console.log(doc)
    })
  }
}
