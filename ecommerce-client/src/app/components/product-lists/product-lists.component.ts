import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})
export class ProductListsComponent implements OnInit {

  products:[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.listProducts();

  }


  listProducts() {
    

    this.productService.getProductList().subscribe(data=>{
      
      let products = JSON.parse(data);
      this.products = products;
    })


    // this.productService.returnObservable().subscribe(
    //   data => {
    //     console.log("data");
    //     console.log(data);
    //     // this.products = data;
    //   }
    // );

  }

}
