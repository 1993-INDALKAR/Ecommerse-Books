import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../common/product';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})
export class ProductListsComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listProducts();
  }


  listProducts() {
    // this.productService.getProductList().subscribe(
    //   data => {
    //     console.log("hello");
    //     this.products = data;
    //   }
    // );

    this.productService.getProductList().subscribe(data=>{
      console.log("hello");
      console.log("hello");
      console.log(data);
    })

  }

}
