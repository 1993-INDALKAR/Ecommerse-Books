import { Injectable, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
import { fromEvent, empty, isObservable, of } from 'rxjs';
import { share } from 'rxjs/operators';
import { exhaustMap, tap, take, finalize, shareReplay, map, debounceTime, pairwise } from 'rxjs/operators/';
// import { pairwise } from 'rxjs/operators';
import { ProductService } from "./product.service";
// import 'rxjs/add/observable/fromEvent';
import { BehaviorSubject } from 'rxjs/';

export type ButtonHandler = (e?: MouseEvent) => Observable<unknown> | Promise<unknown>;
const defaultHandler: ButtonHandler = (e) => empty();

@Injectable({
  providedIn: 'root',

})
export class SocketioService {

  private socket;
  data = {};
  previousData: any = {}
  clickEvent: any;
  subs: any;
  // private socket;
  @ViewChild('input', { static: true }) button: ElementRef;



  // private messages = new BehaviorSubject(new Array<String>());
  //  messages: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  messages = new BehaviorSubject<any[]>([]);
  //  messages: BehaviorSubject<String[]> = new BehaviorSubject<String[]>(null);
  private allMessages: [];
  currentMessage = this.messages.asObservable();

  constructor(private productService: ProductService) {

    // this.setUpSocketConnection();

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
        console.log(e);
        this.clickEvent = {
          "id": e.target['id']
          // "id" : e.target['id']
        }

        if (e.target['id'] == "searchId") {
          console.log(this.productService.getSearchProduct());
          this.clickEvent['searchInputData'] = this.productService.getSearchProduct();
        }

        if (e.target['id'] != 'message-btn-id')
          this.socket.emit('clicking', this.clickEvent);

      });

    // this.subs = fromEvent(document.body, 'click')
    //   .pairwise()
    //   .map([a, b]=> {

    //   })


    // this.socket.on('mouse', this.newMouseMove);
    this.socket.on('clicking', this.newMouseClick);


    // this.socket.on('new-message', this.newMessage);

  }

  newMessage(data) {
    // if (this.messages == undefined) {
    //   this.messages.next([...data]);
    // }
    // else {
    //   const currentValue = this.messages.value;
    //   const updatedValue = [...currentValue, data];
    //   this.messages.next(updatedValue);
    // }

    // this.messages.next(this.messages.value.push(data));

  }


  newMouseClick(data) {
    // console.log("returned click");
    // console.log(data['id']);
    // console.log("previous:" + this.previousData);
    // console.log("current:" + data['id']);
    if (this.previousData != data['id']) {
      this.previousData = data['id'];

      if (data['id'] == 'searchId') {
        console.log(data);
        let inputElement = (<HTMLInputElement>document.getElementById(data['searchInputData']['id']))
        inputElement.value = data['searchInputData']['name'];
        // inputElement.onkeypress(ev);
        inputElement.dispatchEvent(new Event("input"))
        // var ev = document.createEvent('KeyboardEvent');
        //  ev.initEvent('keypress');
        //  ev.keyCode = 13;
        //  inputElement.dispatchEvent(ev);
        // let inputElement: HTMLElement = document.getElementById(data['searchInputData']['id']) as HTMLElement;
        // inputElement.nodeValue = data['searchInputData']['name'];
      }
      console.log(this.previousData);
      let element: HTMLElement = document.getElementById(this.previousData) as HTMLElement;
      // console.log(element);
      element.click();
      // data = {};

    }

    // this.subs.unsubscribe(); 

  }

  public sendMessage(message) {
    // console.log(message)
    this.socket.emit('new-message', message);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (message) => {
        observer.next(message);
      });
    });
  }

}
