import { Component, OnInit } from '@angular/core';
import { AuthoAdminService } from 'src/app/services/autho-admin.service';

@Component({
  selector: 'app-registman',
  templateUrl: './registman.component.html',
  styleUrls: ['./registman.component.css']
})
export class RegistmanComponent implements OnInit {
  list:any=[{}]
  p: number = 1;
  itemsofpage:number=5;
  constructor(
    private auth:AuthoAdminService
  ) {
    this.auth.getnewmanagers().subscribe((doc:any)=>{
      this.list=doc
    })

   }

  ngOnInit(): void {
  }
  del(id:any,i:any){
    this.auth.refuseinscription(id).subscribe((doc:any)=>{
      console.log(doc)
      this.list.splice(i,1);
    })
  }
  accepter(id:any,i:any){
    this.auth.accpterinscrip(id).subscribe((doc:any)=>{
      console.log(doc)
      this.list.splice(i,1);
    })
  }

}
