import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareserviceService {

  constructor(private http:HttpClient) {
  }

  getallinf(){
   return this.http.get('http://localhost:3000/influencers')  
  }
  getallprod(){
    return this.http.get('http://localhost:3000/products')
  }
  deleteprod(id:any){
    return this.http.delete('http://localhost:3000/product/'+id)
  }
  addprod(profile:any){
    return this.http.post('http://localhost:3000/addprod',profile)
  }
}