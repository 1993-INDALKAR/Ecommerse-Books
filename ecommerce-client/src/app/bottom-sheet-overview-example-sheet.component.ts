import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { SocketioService } from "./services/socketio.service";
import { BehaviorSubject } from "rxjs";

@Component({
    selector: 'bottom-sheet-overview-example-sheet',
    templateUrl: './bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {

    message: string;
    messages: string[] = [];
    // messages1: string[] = [];
    messages1: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([])

    constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>,
        private socketService: SocketioService) { }

    ngOnInit() {
        this.socketService
            .getMessages()
            .subscribe((message: string) => {
                // console.log(message);
                this.messages.push(message);
                // this.messages = this.messages.concat(message);
                this.messages1.next([ ...this.messages ])
            });

            // this.socketService.currentMessage.subscribe(item => this.messages = item);
    }

    openLink(event: MouseEvent): void {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }

    closeChat(){
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }

    sendMessage() {
        console.log(this.message);
        this.socketService.sendMessage(this.message);
        this.message = '';
    }
}
