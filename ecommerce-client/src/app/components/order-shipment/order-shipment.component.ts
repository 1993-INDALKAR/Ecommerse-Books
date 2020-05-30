import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-order-shipment',
  templateUrl: './order-shipment.component.html',
  styleUrls: ['./order-shipment.component.css']
})
export class OrderShipmentComponent implements OnInit {


  constructor(private orderService: ProductService) { }

   orders:any;

  ngOnInit(): void {



    this.orders = this.orderService.getOrderList()
    // console.log(this.orders);
    .subscribe(async (order)=>{
      this.orders = order
      console.log(this.orders);
      for(let order of this.orders){
        let products =  await this.orderService.getOrderProducts(order['product']);
        console.log(products);
      }
      
      // console.log(updateOrder);
    });

    // this.orders =  this.orderService.getOrderProducts(this.orders);
    // console.log(this.orders);
    
  }

}
