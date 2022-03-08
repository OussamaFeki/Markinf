import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthoInfService } from 'src/app/services/autho-inf.service';

@Injectable({
  providedIn: 'root'
})
export class InfGuardGuard implements CanActivate {
  constructor(private auth:AuthoInfService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve,reject)=>{
        if(this.auth.IsloggedIn()==true){
          resolve(true)
        }
        else{
          this.router.navigate(['/login'])
          resolve(false)
        }
      }) 
  }
  
}
