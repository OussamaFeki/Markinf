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
  IsloggedIn:boolean=false
  helper = new JwtHelperService();
  constructor(private http:HttpClient) {

  }
  signin(profile:any){
    return this.http.post('http://localhost:3000/login',profile)
  }
  issavetoken(token:any){
    let decodeToken=this.helper.decodeToken(token)
   localStorage.setItem('token',token)
   this.IsloggedIn=true
  }
  getprof(){
   let token:any=localStorage.getItem('token')
   let decodeToken=this.helper.decodeToken(token)
   return decodeToken 
  }
}
