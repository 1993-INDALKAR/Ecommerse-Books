import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../../services/shopping-cart.service";
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public cartItems:any=[];

  constructor(private shoppingCart:ShoppingCartService) { }

  ngOnInit(): void {

    this.cartItems = this.shoppingCart.getItemsFromCart();
    console.log(this.cartItems);
  }

  removeItemFromCart(item:Object){
    console.log(item);
    this.shoppingCart.removeItem(item);
  }

}
