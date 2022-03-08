import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthoManService } from 'src/app/services/autho-man.service';

@Injectable({
  providedIn: 'root'
})
export class GaurdManagGuard implements CanActivate {
  constructor(private auth:AuthoManService,private router:Router){}
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
