import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthoInfService } from 'src/app/services/autho-inf.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 data:any
  constructor(private router:ActivatedRoute,private route:Router,private auth:AuthoInfService ) {
    this.router.queryParams.subscribe(params=>{
      console.log(params)
        this.data=params
        this.auth.isfbsavetoken(this.data.token)
        this.route.navigate(['/influencer'])
    },err=>{console.log('there is no facebook token')})
   }

  ngOnInit(): void {
  }

}
