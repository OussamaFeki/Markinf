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
    this.share.getprodman(this.id_man).subscribe((doc)=>{
          this.list=doc
        
        }) 
    
    })
    
   this.condition=this.auth.IsloggedIn()
   this.myForm=this.formbuilder.group({
     image:[null]
   })
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
    this.auth.upavatar(this.id_man,formData).subscribe(doc=>{console.log(doc)})
  }
  detail(id:any){
    this.router.navigate(['influencer/produit/'+id])
  }
}
