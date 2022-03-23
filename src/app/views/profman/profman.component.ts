import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthoManService } from 'src/app/services/autho-man.service';

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
  constructor(private auth:AuthoManService,private route:ActivatedRoute,private formbuilder:FormBuilder) {
    if (this.auth.IsloggedIn()){
    this.id_man=this.auth.getprof().id
    }else{
      this.route.params.subscribe((res)=>{
        this.id_man=res.id
        console.log(this.id_man)})
    }
    this.auth.getman(this.id_man).subscribe((doc:any)=>{this.item=doc;
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
