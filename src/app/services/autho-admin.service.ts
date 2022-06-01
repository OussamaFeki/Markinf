import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthoAdminService {
  helper = new JwtHelperService();
  constructor(private http:HttpClient) { }
  signin(profile:any){
    return this.http.post('http://localhost:3000/Admin/login',profile)
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
    if(role!=='admin'){
      return false
    }
    if(this.helper.isTokenExpired(token)){
      return false
    }
    return true
  }}
  //for new managers 
  getnewmanagers(){
   return this.http.get('http://localhost:3000/getinscripts')
  }
  accpterinscrip(id:any){
    return this.http.get('http://localhost:3000/ajoutermanager?id_man='+id)
  }
  refuseinscription(id:any){
    return this.http.get('http://localhost:3000/delateincription?id_man='+id)
  }
}
