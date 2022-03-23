import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthoInfService } from 'src/app/services/autho-inf.service';

@Component({
  selector: 'app-profinf',
  templateUrl: './profinf.component.html',
  styleUrls: ['./profinf.component.css']
})
export class ProfinfComponent implements OnInit {
  id_man:any
  item:any
  condition:any
  myForm:any
  constructor(private auth:AuthoInfService,private formbuilder:FormBuilder,private route:ActivatedRoute) {
    if (this.auth.IsloggedIn()){
      this.id_man=this.auth.getprof().id
      }else{
        this.route.params.subscribe((res)=>{
          this.id_man=res.id
          console.log(this.id_man)})
      }
      this.auth.getinf(this.id_man).subscribe((doc:any)=>{this.item=doc;
      console.log(this.item.image)
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
}
