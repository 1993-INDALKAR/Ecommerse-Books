import { Injectable, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
import { fromEvent, empty, isObservable, of } from 'rxjs';
import { share } from 'rxjs/operators';
import { exhaustMap, tap, take, finalize, shareReplay, map, debounceTime, pairwise } from 'rxjs/operators/';
// import { pairwise } from 'rxjs/operators';

// import 'rxjs/add/observable/fromEvent';

export type ButtonHandler = (e?: MouseEvent) => Observable<unknown> | Promise<unknown>;
const defaultHandler: ButtonHandler = (e) => empty();

@Injectable({
  providedIn: 'root',

})
export class SocketioService {

  socket;
  data = {};
  previousData: any = {}
  clickEvent: any;
  subs: any;
  @ViewChild('input', { static: true }) button: ElementRef;

  constructor() {

    this.setUpSocketConnection();

  }

  setUpSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);

    // fromEvent(document.body, 'mousemove').subscribe((e: MouseEvent) => {
    //   // console.log(e);
    //   this.data = {
    //     "x": e.pageX,
    //     "y": e.pageY
    //   }

    //   this.socket.emit('mouse', this.data);

    // });

    this.subs = fromEvent(document, 'click')
      // this.subs = fromEvent(this.button.nativeElement, 'click')
      // .pipe(
      //   // shareReplay(1)
      //   map(event => {event.currentTarget['value'];
      //       console.log(event)
      //       this.clickEvent = {
      //         "id" : event.target['id']
      //         // "id" : e.target['id']
      //       }
      //     }),
      //   debounceTime(1000)
      //   )

      .subscribe(e => {
        // console.log("from event");
        // console.log(e);
        this.clickEvent = {
          "id": e.target['id']
          // "id" : e.target['id']
        }

        this.socket.emit('clicking', this.clickEvent);

      });

    // this.subs = fromEvent(document.body, 'click')
    //   .pairwise()
    //   .map([a, b]=> {

    //   })


    // this.socket.on('mouse', this.newMouseMove);
    this.socket.on('clicking', this.newMouseClick);


  }

  // private wrapHandlerInObservable(e: MouseEvent) {
  //   this._processing = true;
  //   const handleResult = this.handler(e);
  //   let obs: Observable<unknown>;
  //   if (isObservable(handleResult)) {
  //     obs = handleResult;
  //   } else {
  //     obs = of(handleResult);
  //   }
  //   return obs.pipe(take(1), finalize(() => this._processing = false));
  // }

  // newMouseMove() {
  // console.log(this.data);
  // fromEvent(document.body, 'mousemove').subscribe((e: MouseEvent) => {
  //   console.log(this.data);
  //   return {
  //     x: this.data['x'],
  //     y: this.data['y']
  //   }


  // });

  // }


  newMouseClick(data) {
    // console.log("returned click");
    // console.log(data['id']);
    console.log("previous:" + this.previousData);
    console.log("current:" + data['id']);
    if (this.previousData != data['id']) {
      this.previousData = data['id'];
      let element: HTMLElement = document.getElementById(data['id']) as HTMLElement;
      // console.log(element);
      element.click();
      data = {};
      
    }

    // this.subs.unsubscribe(); 

  }

}
