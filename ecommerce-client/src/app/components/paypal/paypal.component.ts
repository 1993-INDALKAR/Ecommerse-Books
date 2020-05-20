import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
// import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

declare var paypal;
declare var Stripe;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})



export class PaypalComponent implements OnInit {

  // @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  // // public payPalConfig?: IPayPalConfig;

  // constructor() { }

  // // ngOnInit(): void {
  // // }

  // product = {
  //   price: 1.0,
  //   description: 'used couch, decent condition',
  //   img: 'assets/couch.jpg'
  // };

  // paidFor = false;

  // ngOnInit() {
  //   paypal
  //     .Buttons({
  //       createOrder: (data, actions) => {
  //         console.log(data);
  //         return actions.order.create({
  //           purchase_units: [
  //             {
  //               description: this.product.description,
  //               amount: {
  //                 currency_code: 'USD',
  //                 value: this.product.price
  //               }
  //             }
  //           ]
  //         });
  //       },
  //       onApprove: async (data, actions) => {
  //         console.log(data);
  //         const order = await actions.order.capture();
  //         this.paidFor = true;
  //         console.log(order);
  //       },
  //       onError: err => {
  //         console.log(err);
  //       }
  //     })
  //     .render(this.paypalElement.nativeElement);
  // }




  ngOnInit() {
    this.loadStripe();
  }

  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
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
      alert('Token Created!!');
    }
  });

  handler.open({
    name: 'Demo Site',
    description: '2 widgets',
    amount: amount * 100
  });

}

  

}
