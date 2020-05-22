import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { ShoppingCartService } from '../../services/shopping-cart.service';

declare var paypal;
declare var Stripe;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})



export class PaypalComponent implements OnInit {

  totalPrice: number = 0.0;
  totalItems:number=0;

  constructor(private shoppingCart: ShoppingCartService) {

    this.shoppingCart.currentnoOfItemsCart.subscribe(item => this.totalItems = item);
   }



  ngOnInit() {
    this.loadStripe();
    this.totalPrice = this.shoppingCart.getTotalPrice();
    // this.totalItems = this.shoppingCart.getCartItemCount();
    this.shoppingCart.currentnoOfItemsCart.subscribe(item => this.totalItems = item);
  }

  loadStripe() {

    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
  }

  pay(amount) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_cFUkBVJPt74ygjRBuGUk7hvk00D3oFp2YF',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        // alert('Token Created!!');
      }
    });

    handler.open({
      name: 'Angular E-commerce',
      description: `${this.totalItems} Products`,
      amount: this.totalPrice * 100
    });

  }



}
