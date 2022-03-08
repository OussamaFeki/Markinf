import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthoManService } from 'src/app/services/autho-man.service';

@Component({
  selector: 'app-manpage',
  templateUrl: './manpage.component.html',
  styleUrls: ['./manpage.component.css']
})
export class ManpageComponent implements OnInit {
  username:any
  constructor(private route:Router,private auth:AuthoManService) {
    this.username=this.auth.getprof().fullname
    console.log(this.auth.IsloggedIn())
   }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear()
 
    this.route.navigate(['/login'])
   }
}
