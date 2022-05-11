import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthoManService {
  helper = new JwtHelperService();
  constructor(private http:HttpClient) {

   }
  signin(profile:any){
    return this.http.post('http://localhost:3000/loginman',profile)
  }
  issavetoken(token:any){
    localStorage.setItem('token',token)
   }
  getprof(){
    let token:any=localStorage.getItem('token')
    if(!token){
      return null
    }else{
    let decodeToken=this.helper.decodeToken(token)
    return decodeToken} 
   }
   IsloggedIn(){
    let token:any=localStorage.getItem('token')
    let decodetoken=this.getprof()
    if(!decodetoken){
     return false
    }else{
    let role=decodetoken.role
    if(role!=='manager'){
      return false
    }
    if(this.helper.isTokenExpired(token)){
      return false
    }
    return true
  }}
  RegMan(f:any){
    return this.http.post('http://localhost:3000/registery',f)
  }
  getinfsofman(id_man:any){
    return this.http.get('http://localhost:3000/infsofman/'+id_man)
  }
  getman(id:any){
    return this.http.get('http://localhost:3000/manager/'+id)
  }
  firinf(man_id:any,id:any){
    return this.http.patch('http://localhost:3000/fir/'+man_id,id)
  }
  upavatar(man_id:any,image:any){
    return this.http.put('http://localhost:3000/upavatar/'+man_id,image)
  }
  config(id_man:any,form:any){
    return this.http.put('http://localhost:3000/configman/'+id_man,form)
  }
  refuse(id_man:any,id:any){
     return this.http.get('http://localhost:3000/refuse?man_id='+id_man+'&id='+id)
  }
  invited(id_man:any,idinf:any){
    return this.http.get('http://localhost:3000/newmanid?id_man='+id_man+'&id_inf='+idinf)
  }
  invitinf(id:any,id_man:any){
    return this.http.get('http://localhost:3000/addnewman?id='+id+'&manid='+id_man)
  }
  accepted(id_man:any,idinf:any){
    return this.http.get('http://localhost:3000/findmanid?id_man='+id_man+'&id_inf='+idinf)
  }
  // configpass(id_man:any,form:any){
  //   return this.http.put('http://localhost:3000/configman/:id_man'+id_man,form)
  // }
  configprices(id_man:any,form:any){
    return this.http.put('http://localhost:3000/configprice/'+id_man,form)
  }
}
