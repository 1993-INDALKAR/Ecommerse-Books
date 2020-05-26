import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
// import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ProductService } from "../../services/product.service";

declare var paypal;
declare var Stripe;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})



export class PaypalComponent implements OnInit {

  totalPrice: number = 0.0;
  totalItems: number = 0;

  constructor(private shoppingCart: ShoppingCartService, private productService: ProductService, private _zone: NgZone) {

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
      token: async token => {
        // You can access the token ID with `token.id`. 
        // Get the token ID to your server-side code for use.
        // let updated = await this.productService.updateProduct();
        // if (updated) {
        //   this.shoppingCart.clearShoppingCart();
        // }

        this._zone.run(async () => {
          // var updated = this.updateProduct();
          await this.productService.updateProduct()
        });
        // console.log(token);

        // alert('Token Created!!');
      }
    })

    handler.open({
      name: 'Angular E-commerce',
      description: `${this.totalItems} Products`,
      amount: this.totalPrice * 100
    });

  }

  // updateProduct() {
  //   console.log("update product");
  // }



}
