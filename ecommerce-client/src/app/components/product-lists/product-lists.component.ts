import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductCategoryService } from "../../services/product-category.service";

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})
export class ProductListsComponent implements OnInit {

  products: [];
  private sub: any;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router,
    private productCatService: ProductCategoryService) { }

  ngOnInit(): void {

    this.sub = this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      const keyword = params['keyword'];
      console.log("keyword: "+keyword);
      if(keyword != undefined){
        this.getSearchProducts(keyword);
      }
      else{
        this.getProducts(id);
      }
      // console.log(id);
      
    });
    

  }

  getSearchProducts(keyword:String){
    this.productService.getSearchResults(keyword).subscribe(data=>{
      this.products = JSON.parse(data);
    })
  }



   getProducts(categId){
    if (categId == undefined) {
      // console.log(categId);
      // this.listCategoryProducts(categId);
      this.listProducts();
    }
    else {
      console.log("all products");
      // this.listProducts();
      this.listCategoryProducts(categId);
    }
  }

  listProducts() {
    this.productService.getProductList().subscribe(data => {

      // let products = JSON.parse(data);
      this.products = JSON.parse(data);
      // console.log(this.products);
    })

  }

  listCategoryProducts(id: Number) {
    this.productCatService.getProdListByCategory(id).subscribe(data => {
      data = JSON.parse(data);
      this.products = [];
      this.products = data['products'];
      console.log(this.products);
    });

  }

  
  trackByFn(index, product) {
    return index;
  }

}