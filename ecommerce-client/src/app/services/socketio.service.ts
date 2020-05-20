import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';
// import 'rxjs/add/observable/fromEvent';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket;
  data = {};
  clickEvent:any;

  constructor() {

    this.setUpSocketConnection();
   }

  setUpSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);

    fromEvent(document.body, 'mousemove').subscribe((e: MouseEvent) => {
      // console.log(e);
      this.data = {
        "x": e.pageX,
        "y": e.pageY
      }

      this.socket.emit('mouse', this.data);

    });

    fromEvent(document.body, 'click').subscribe((e) => {
      console.log(e.target['id']);

      this.clickEvent = {
        "id" : e.target['id']
      }

      this.socket.emit('clicking', this.clickEvent);

    });

    this.socket.on('mouse', this.newMouseMove);
    this.socket.on('clicking', this.newMouseClick);


  }

  newMouseMove() {
    console.log(this.data);
    // fromEvent(document.body, 'mousemove').subscribe((e: MouseEvent) => {
    //   console.log(this.data);
    //   return {
    //     x: this.data['x'],
    //     y: this.data['y']
    //   }


    // });

  }


  newMouseClick(data){
    console.log("returned click");
    console.log(this.clickEvent);
    let element: HTMLElement = document.getElementById(data['id']) as HTMLElement;
      console.log(element);
      element.click();
    
    
  }

}
