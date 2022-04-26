import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthoInfService } from 'src/app/services/autho-inf.service';
import { AuthoManService } from 'src/app/services/autho-man.service';
import { FbserveService } from 'src/app/services/fbserve.service';

@Component({
  selector: 'app-profinf',
  templateUrl: './profinf.component.html',
  styleUrls: ['./profinf.component.css']
})
export class ProfinfComponent implements OnInit {
  id_inf:any
  item:any
  condition:any
  myForm:any
  list:any
  number:any
  constructor(private auth:AuthoInfService,
    private formbuilder:FormBuilder,
    private route:ActivatedRoute,
    private aut:AuthoManService,
    private fbs:FbserveService
    ) {
    if (this.auth.IsloggedIn()){
      this.id_inf=this.auth.getprof().id
      }else{
        this.route.params.subscribe((res)=>{
          this.id_inf=res.id
          console.log(this.id_inf)
        })
      }
      this.auth.getinf(this.id_inf).subscribe((doc:any)=>{this.item=doc;
      console.log(this.item.image)
      if(!this.auth.IsloggedIn()){
      this.fbs.getposts(doc.facebookId,doc.accesstoken).subscribe((result:any)=>{
        this.list=result.posts.data
      })
      this.fbs.numberoffriend(doc.facebookId,doc.accesstoken).subscribe((result:any)=>{
        this.number=result.friends.summary.total_count
        
      })
      }
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
    this.auth.upavatar(this.id_inf,formData).subscribe(doc=>{console.log(doc)})
  }
}
