import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ProductCategoryService} from "../../services/product-category.service";

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})
export class ProductListsComponent implements OnInit {

  products:[];

  constructor(private productService:ProductService,private activatedRoute: ActivatedRoute,
              private productCatService:ProductCategoryService) { }

  ngOnInit(): void {

    let categId = this.activatedRoute.snapshot.queryParams["id"];
    console.log("categId");
    if(categId){
      console.log(categId);
      this.listCategoryProducts(categId);
    }
    else{
      this.listProducts();
    }

  }


  listProducts() {
    this.productService.getProductList().subscribe(data=>{
      
      let products = JSON.parse(data);
      this.products = products;
    })

  }

  async listCategoryProducts(id:Number){
    let data = await this.productCatService.getProdListByCategory(id);
  
    console.log(data);
  
  }

}