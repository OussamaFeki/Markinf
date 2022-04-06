import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareserviceService {

  constructor(private http:HttpClient) {
  }
  private _refreshrequired= new Subject<void>();
  get Refreshrequired(){
    return this._refreshrequired;
  }
  getallinf(){
   return this.http.get('http://localhost:3000/influencers')  
  }
  getinf(fullname:any){
    return this.http.get('http://localhost:3000/research?fullname='+fullname)
  }
  getallman(){
    return this.http.get('http://localhost:3000/managers')
  }
  getman(id:any){
    return this.http.get('http://localhost:3000/manager/'+id)
  }
  searchman(fullname:any){
    return this.http.get('http://localhost:3000/researchman?fullname='+fullname)
  }
  getallprod(){
    return this.http.get('http://localhost:3000/products')
  }
  getprodman(id:any){
    return this.http.get('http://localhost:3000/productofman/'+id)
  }
  deleteprod(id:any){
    return this.http.delete('http://localhost:3000/product/'+id)
  }
  addprod(profile:any,id:any){
    return this.http.post('http://localhost:3000/addprod/'+id,profile)
  }
  getprod(id:any){
    return this.http.get('http://localhost:3000/product/'+id)
  }
  upprod(f:any,id:any){
    return this.http.put('http://localhost:3000/update/'+id,f)
  }
  deleteinf(id:any){
    return this.http.delete('http://localhost:3000/delete/'+id) 
  }
  boiteinvit(id:any):Observable<any>{
    return this.http.get<any>('http://localhost:3000/newinf/'+id)
  }
  boiteinvitofinf(id:any):Observable<any>{
    return this.http.get('http://localhost:3000/newman/'+id)
  }
  addinfs(id_man:any,id:any){
    return this.http.get('http://localhost:3000/addinfs?man_id='+id_man+'&id='+id)
  }
  addmans(id_man:any,id:any){
    return this.http.get('http://localhost:3000/addman?man_id='+id_man+'&id='+id)
  }
  delman(id:any){
    return this.http.delete('http://localhost:3000/delman/'+id)
  }
  dellistnewinf(id:any){
    return this.http.delete('http://localhost:3000/dellist/'+id)
  }
  fireinf(id_man:any,id:any){
    return this.http.get('http://localhost:3000/fir?id='+id+'&man_id='+id_man)
  }
  firedinf(id_man:any,id:any){
    return this.http.get('http://localhost:3000/fired?man_id='+id_man+'&id='+id)
  }
}
