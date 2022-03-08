import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthoInfService } from 'src/app/services/autho-inf.service';

@Component({
  selector: 'app-infpage',
  templateUrl: './infpage.component.html',
  styleUrls: ['./infpage.component.css']
})
export class InfpageComponent implements OnInit {
  username:any
  // role:any
  constructor(private auth:AuthoInfService,private route:Router ) {
    // if (!localStorage.getItem('token')){
    //   route.navigate(['/login'])
    // }
    this.username=this.auth.getprof().fullname
    // this.role=this.auth.getprof().role
    console.log(this.auth.IsloggedIn())
  }

  ngOnInit(): void {
  }
  logout(){
   localStorage.clear()

   this.route.navigate(['/login'])
  }

}
