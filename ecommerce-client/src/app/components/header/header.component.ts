import { Component, OnInit } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {SocketioService} from "../../services/socketio.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faCartPlus=faCartPlus;
  items:number;

  constructor(private shoppingCart:ShoppingCartService,private route: Router,
              private socketService:SocketioService) {

    this.shoppingCart.currentnoOfItemsCart.subscribe(item => this.items = item);

   }

  ngOnInit(): void {

    this.shoppingCart.currentnoOfItemsCart.subscribe(item => this.items = item);

  }

  routeToCart(){
    this.route.navigate(['cart']);
  }

  startConnection(){
    console.log("calling socket server");
    this.socketService.setUpSocketConnection();
  }

  // addItemCount(){
  //   console.log("counting item");
  // }

}
