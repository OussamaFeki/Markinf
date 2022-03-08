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
}
