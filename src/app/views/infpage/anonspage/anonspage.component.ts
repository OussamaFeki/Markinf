import { AnnoInvitService } from './../../../services/annonce/anno-invit.service';
import { WebSocketService } from './../../../services/web-socket.service';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-anonspage',
  templateUrl: './anonspage.component.html',
  styleUrls: ['./anonspage.component.css']
})
export class AnonspageComponent implements OnInit {
  constructor(private annonce:AnnoInvitService ){
    this.annonce.updateClient()
   }
  ngOnInit(): void {
     this.annonce.pushSubscription();
  }

}
