import { Injectable } from '@angular/core';
import { Observable, Subscriber} from 'rxjs';
import  io from 'socket.io-client' 
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  socket:any
  constructor() {
    this.socket=io('http://localhost:3000')
  }
  listen(eventName:any){
    return new Observable((sub:any)=>{
      this.socket.on(eventName,(data:any)=>{
      sub.next(data)
      })
    })
  }
  emit(eventName :string, data:any){
    this.socket.emit(eventName,data);
  }
  
}
