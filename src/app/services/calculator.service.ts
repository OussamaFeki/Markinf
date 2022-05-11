import { Injectable } from '@angular/core';
import { AuthoManService } from './autho-man.service';
@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private auth:AuthoManService) { }


  calculinteretlove(interet:any,numberoflove:any,multiplicateur:any){
    // if(numberoflove>=1000){ var n =Math.floor(numberoflove/1000)
    // var m=0
    // while(n>=10){
    // m=m+1
    // n=Math.floor(numberoflove/10)
    // }
    // let totalinterait=interet*Math.pow(multiplicateur,m)*Math.floor(numberoflove/100)
    // return totalinterait}else{return 0}
    if(numberoflove>0){
      let totalinterait=interet*Math.pow(multiplicateur,1)
    return totalinterait}else{return 0}
    
  }
}
