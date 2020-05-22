import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../../services/shopping-cart.service";
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public cartItems:any=[];
  public subTotal:number=0.0;
  public total:number=0.0;
  public tax:number=10.0;

  constructor(private shoppingCart:ShoppingCartService) { }

  ngOnInit(): void {

    this.cartItems = this.shoppingCart.getItemsFromCart();
    this.calculateTotal();
    // console.log(this.cartItems);
  }

  removeItemFromCart(item:Object){
    // console.log(item);
    this.shoppingCart.removeItem(item);
    this.updateTotal(item);
  }

  calculateTotal(){
    // console.log(this.cartItems);
    this.subTotal = 0.0;
    for(let item in this.cartItems){
      // console.log(item);
      this.subTotal += this.cartItems[item]['unitPrice'] * this.cartItems[item]['quantity'];
    }

    console.log(this.subTotal);
    this.total = 0.0;
    console.log(this.total);
    this.total += this.subTotal + this.tax;
    console.log(this.total);
    this.shoppingCart.setTotalPrice(this.total);
  }

  updateTotal(item){
    this.subTotal -= item['unitPrice'] * item['quantity'];
    this.total -= item['unitPrice'] * item['quantity'];
    this.shoppingCart.setTotalPrice(this.total);
  }

}
