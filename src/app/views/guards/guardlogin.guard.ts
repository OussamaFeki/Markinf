import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthoInfService } from 'src/app/services/autho-inf.service';
import { AuthoManService } from 'src/app/services/autho-man.service';

@Injectable({
  providedIn: 'root'
})
export class GuardloginGuard implements CanActivate {
  constructor(private auth:AuthoInfService,private router:Router,private aut:AuthoManService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve,reject)=>{
      if(this.auth.IsloggedIn()==true){
        this.router.navigate(['/influencer'])
        resolve(false)
      }else if(this.aut.IsloggedIn()==true){
        this.router.navigate(['/manager'])
        resolve(false)
      }
      resolve(true)
    })
  }
  
}
