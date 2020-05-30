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



    this.orderService.getOrderList().subscribe(order=>{
      this.orders = order
      console.log(this.orders);
    });
    


  }

}
