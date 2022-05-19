import { AuthoManService } from 'src/app/services/autho-man.service';
import { AuthoInfService } from 'src/app/services/autho-inf.service';
import { Component, OnInit } from '@angular/core';
import { AuthoAdminService } from 'src/app/services/autho-admin.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-configaccount',
  templateUrl: './configaccount.component.html',
  styleUrls: ['./configaccount.component.css']
})
export class ConfigaccountComponent implements OnInit {
  myForm:any
  isinf:boolean=false
  isadm:boolean=false
  isman:boolean=false  
  id:any
  item:any={}
  profile:any
  form2:any
  prof:boolean=false
  sala_ischanged:boolean=false

  constructor(private authinf:AuthoInfService,
    private authman: AuthoManService,
    private authadm:AuthoAdminService,
    private formbuild:FormBuilder,
    private toastr:ToastrService
    ) {
    this.myForm=this.formbuild.group({
        oldpass:["",Validators.required],
        newpass:["",Validators.required],
    })
   this.isinf=this.authinf.IsloggedIn()
   this.isadm=this.authadm.IsloggedIn()
   this.isman=this.authman.IsloggedIn() 
   
   if(this.isinf){
     this.id=this.authinf.getprof().id
     this.authinf.getinf(this.id).subscribe((doc:any)=>{this.item=doc;
      console.log(this.item.image);
      this.profile=doc.profile
      if(this.profile!=undefined){
        this.prof=true
      }
      console.log(this.profile)
      })
   }
   if(this.isadm){
     this.id=this.authadm.getprof().id
   }
   if(this.isman){
     this.id=this.authman.getprof().id
     this.authman.getman(this.id).subscribe((doc:any)=>{this.item=doc;
      this.sala_ischanged=(this.item.standard!=0 && this.item.foreachmultilove!=1 && this.item.foreachmultilike!=1)
      })
   }
   console.log(this.isinf)
    
  //  this.form2=this.formbuild.group({
  //   standard:[null,Validators.required],
  //   love:[null,Validators.required],
  //   like:[null,Validators.required]
  //  })
  }

  ngOnInit(): void {

  }
  change(f:NgForm){
    if(this.isman){
      console.log(f.value)
     this.authman.config(this.id,f.value).subscribe(doc=>{
       console.log(doc)
       this.toastr.success('password changed','notification')
     },err=> this.toastr.error(err.error,'Error'))
    
    }
    if(this.isadm){
      
    }
    if(this.isinf){
      
    }
  }
  changesalary(form:NgForm){
    console.log(form.value)
      this.authman.configprices(this.id,form.value).subscribe(doc=>{
        console.log(doc)
        this.authman.getman(this.id).subscribe((res:any)=>{
          this.item=res;
        })
      })

      this.sala_ischanged=true
  }
}
