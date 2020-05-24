import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { auth } from 'firebase';
import { SocketioService } from "../../services/socketio.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: Object = {};

  constructor(public authService: AuthService, public socketService: SocketioService) {
    authService.getUser().subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    this.authService.getUser().subscribe((user) => {
      this.user = user;
    });
  }

  startConnection() {
    this.socketService.setUpSocketConnection();
  }

}
