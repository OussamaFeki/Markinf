import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthoAdminService } from 'src/app/services/autho-admin.service';
import { AuthoInfService } from 'src/app/services/autho-inf.service';
import { AuthoManService } from 'src/app/services/autho-man.service';
import { ShareserviceService } from 'src/app/services/shareservice.service';

@Component({
  selector: 'app-profman',
  templateUrl: './profman.component.html',
  styleUrls: ['./profman.component.css']
})
export class ProfmanComponent implements OnInit {
  id_man:any
  item:any
  condition:any
  myForm:any
  isman:boolean=false
  isinf:boolean=false
  isadm:boolean=false
  list:any
  p:number=1;
  image:any
  fullname:any
  email:any
  filter:any
  test:any
  influencers:number=0
  constructor(private auth:AuthoManService,
    private route:ActivatedRoute,
    private router:Router,
    private formbuilder:FormBuilder,
    private autinf:AuthoInfService,
    private autad:AuthoAdminService,
    private share:ShareserviceService) {
    this.isman=this.auth.IsloggedIn()
    this.isinf=this.autinf.IsloggedIn()
    this.isadm=this.autad.IsloggedIn()
    if (this.auth.IsloggedIn()){
    this.id_man=this.auth.getprof().id
    }else{
      this.route.params.subscribe((res)=>{
        this.id_man=res.id
        console.log(this.id_man)})
    }
    this.auth.getman(this.id_man).subscribe((doc:any)=>{this.item=doc;
      this.image=this.item.image
      this.fullname=this.item.fullname
      this.email=this.item.email
    this.share.getprodman(this.id_man).subscribe((doc)=>{
          this.list=doc
        
        }) 
    
    })
    this.auth.getinfsofman(this.id_man).subscribe((doc:any)=>{
     this.influencers=doc.length
    })
    
   this.condition=this.auth.IsloggedIn()
   this.myForm=this.formbuilder.group({
     image:[null]
   })
   this.filter=this.formbuilder.group({
    fullname:['']
  })
 console.log(this.filter)
 this.test=this.filter.get('fullname').value
  }

  ngOnInit(): void {
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
  change(){
    const formData:any =new FormData();
    formData.append('image', this.myForm.get('image').value)
    this.auth.upavatar(this.id_man,formData).subscribe(res=>{console.log(res)
      this.auth.getman(this.id_man).subscribe((doc:any)=>{this.item=doc;
      })
    })
  }
  detail(id:any){
    if(this.autinf.IsloggedIn()){
      this.router.navigate(['influencer/produit/'+id])
    }
    if(this.autad.IsloggedIn()){
      this.router.navigate(['admin/produit/'+id])
    }
  }
  chearch(){
    // console.log(this.filter.get('fullname').value)
    //   this.share.searchprod(this.filter.get('fullname').value).subscribe(doc=>{this.list=doc
    //   console.log(doc)
    //   })
    
    this.share.searchprodforman(this.filter.get('fullname').value,this.id_man).subscribe(doc=>{this.list=doc
    console.log(doc)
    })
    this.test=this.filter.get('fullname').value
  }
}
