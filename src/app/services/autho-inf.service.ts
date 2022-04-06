import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class AuthoInfService {
  ProfilInf={
    user:'',
    role:''
  }
  
  helper = new JwtHelperService();
  constructor(private http:HttpClient) {

  }
  signin(profile:any){
    return this.http.post('http://localhost:3000/login',profile)
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
    if(role!=='influencer'){
      return false
    }
    if(this.helper.isTokenExpired(token)){
      return false
    }
    return true
  }}
  Registry(f:any){
    return this.http.post('http://localhost:3000/addinf',f)
  }
  getmansofinf(id:any){
    return this.http.get('http://localhost:3000/mansofinf/'+id)
  }
  upavatar(id:any,image:any){
    return this.http.put('http://localhost:3000/upavatarofinf/'+id,image)
  }
  refuse(id:any,id_man:any){
    return this.http.get('http://localhost:3000/refuseman?man_id='+id_man+'&inf_id='+id)
  }
  getinf(id:any){
    return this.http.get('http://localhost:3000/influencer/'+id)
  }
  invitman(id_man:any,idinf:any){
    return this.http.get('http://localhost:3000/addnewinf?id='+id_man+'&infid='+idinf)
  }
  invited(id_man:any,idinf:any){
    return this.http.get('http://localhost:3000/newinfid?id_man='+id_man+'&id_inf='+idinf)
  }
}
