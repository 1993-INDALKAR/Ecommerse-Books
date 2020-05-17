import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from "../../services/product.service"
import {ShoppingCartService} from "../../services/shopping-cart.service";
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  public product: Object = {};
  private sub: any;
  myThumbnail = "https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg";
  myFullresImage = "https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,
              private shoppingCart:ShoppingCartService) { }

  ngOnInit(): void {

    this.sub = this.activatedRoute.params.subscribe(params => {
      const id = params['id'];



      // console.log("id : " + id);

      if (id != undefined) {
        this.getProductDetail(id);
      }


    });


  }


  getProductDetail(id: Number) {
    this.productService.getProductDetail(id).subscribe(data => {
      // console.log(data);
      // this.product = JSON.parse(data);
      this.product = JSON.parse(data);
      console.log(this.product);
    })
  }

  addToCart(product:{}){
    // console.log(product);
    this.shoppingCart.setItemsToCart(product);
    this.shoppingCart.getCartItemCount(this.shoppingCart.getItemsFromCart().length);

  }

}
