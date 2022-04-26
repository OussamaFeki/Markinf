import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Injectable } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
@Injectable({
  providedIn: 'root'
})
export class FbserveService {
  
  constructor(private http:HttpClient) {
   
   }

  getposts(userid:any,accesstoken:Token){
  
//  "https://graph.facebook.com/v13.0/me?fields=posts%7Bfull_picture%2Cmessage%7D&access_token="
   return this.http.get(`https://graph.facebook.com/v13.0/${userid}?fields=posts%7Bfull_picture%2Cmessage%7D&access_token=${accesstoken}`)
  }
  getreaction(postid:any,accesstoken:Token){
    return this.http.get(`https://graph.facebook.com/v13.0/${postid}?fields=reactions.summary(total_count)&access_token=${accesstoken}`)
  }
  numberoffriend(userid:any,accesstoken:any){
    return this.http.get(`https://graph.facebook.com/v13.0/${userid}?fields=friends&access_token=${accesstoken}`)
  }
}
