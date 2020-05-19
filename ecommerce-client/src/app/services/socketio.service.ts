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

  constructor() {

    this.setUpSocketConnection();
   }

  setUpSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);

    fromEvent(document.body, 'mousemove').subscribe((e: MouseEvent) => {
      this.data = {
        "x": e.pageX,
        "y": e.pageY
      }

      this.socket.emit('mouse', this.data);

    });

    this.socket.on('mouse', this.newMouseMove);


  }

  newMouseMove() {
    fromEvent(document.body, 'mousemove').subscribe((e: MouseEvent) => {
      console.log(this.data);
      return {
        x: this.data['x'],
        y: this.data['y']
      }


    });

  }
}
