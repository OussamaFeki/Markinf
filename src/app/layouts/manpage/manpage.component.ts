import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthoManService } from 'src/app/services/autho-man.service';
import { ShareserviceService } from 'src/app/services/shareservice.service';

@Component({
  selector: 'app-manpage',
  templateUrl: './manpage.component.html',
  styleUrls: ['./manpage.component.css']
})
export class ManpageComponent implements OnInit {
  username:any
  id:any
  prof:any
  constructor(private route:Router,private auth:AuthoManService,private share:ShareserviceService) {
    this.username=this.auth.getprof().fullname
    this.id=this.auth.getprof().id
    this.share.getman(this.id).subscribe(doc=>this.prof=doc)
    console.log(this.auth.IsloggedIn())
    
   }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear()
 
    this.route.navigate(['/login'])
   }
}
