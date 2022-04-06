import { HttpClient } from '@angular/common/http';
import { ApplicationRef, Injectable } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class AnnoInvitService {
private readonly privatekey='3Cx1ovUyBR8Qpqkz9gm08dZ_lrSbi8Pu9o0gO1yeLOw'
  constructor(
    private http:HttpClient,
    private appRef:ApplicationRef,
    private swpush:SwPush,
    private update:SwUpdate
    ) { }
  pushSubscription(){
    if(!this.swpush.isEnabled){
     console.log('Notification is not enabled');
     return;
    }
    this.swpush.requestSubscription({
      serverPublicKey:this.privatekey,
    }).then(sub=>console.log(JSON.stringify(sub)))
    .catch(err=>console.log(err))
    
  }
  updateClient(){
    if(!this.update.isEnabled){
      console.log('Not Enable')
    }
    this.update.available.subscribe((event:any)=>{
      console.log('current',event.current,'available',event.available);
      
    })
  }

}
