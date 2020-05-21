import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductCategoryService } from "../../services/product-category.service";
import {ShoppingCartService} from '../../services/shopping-cart.service';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})
export class ProductListsComponent implements OnInit {

  products: [];
  private sub: any;
  length:number;
  pageSize:number;
  pageSizeOptions:number;
  private allProd:boolean = true;
  public cartItemsId:any=[];

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router,
    private productCatService: ProductCategoryService,private shoppingCart:ShoppingCartService) { 

      // this.cartItemsId = this.shoppingCart.cartItemsID;
      this.cartItemsId = undefined;

    }

  ngOnInit(): void {

    this.sub = this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      const keyword = params['keyword'];
      // console.log("keyword: " + keyword);
      if (keyword != undefined) {
        this.getSearchProducts(keyword);
      }
      else {
        this.getProducts(id);
      }
    });

    this.cartItemsId = this.shoppingCart.getcartItemsID();
    // this.shoppingCart.currentcartItemsID.subscribe(item => this.cartItemsId = item);;
    // this.shoppingCart.cartItemsID.subscribe(item =>{
    //   console.log(item);
    // } );
    // console.log( this.cartItemsId);

  }

  getSearchProducts(keyword: String) {
    this.productService.getSearchResults(keyword).subscribe(data => {
      this.products = JSON.parse(data);
    })
  }



  async getProducts(categId) {
    // let setprod;
    if (categId == undefined) {
      await this.listProducts();
      const pagination = await this.productService.getAllProdPagination();
      this.setPagination(pagination);
      this.paginatorListChange(0,this.pageSize);
    }
    else {
      await this.listCategoryProducts(categId);
      const pagination = await this.productCatService.getCategoryProdPagination();
      this.setPagination(pagination);
      this.allProd = false;
      this.paginatorListChange(0,this.pageSize);
    }

      
  }

  async listProducts() {
    await this.productService.getProductList().subscribe(data => {
      this.products = JSON.parse(data);
      // console.log(this.products)
      this.productService.setAllProducts(this.products);
      return true;
    })

  }

  listCategoryProducts(id: Number) {
    this.productCatService.getProdListByCategory(id).subscribe(data => {
      data = JSON.parse(data);
      this.products = [];
      this.products = data['products'];
      this.productCatService.setAllCatProducts(this.products);
    });

  }


  trackByFn(index, product) {
    return index;
  }


  paginatorListChange(pageIndex: number, pageSize: number) {
    // console.log(this.products);
    const startProd = pageIndex * pageSize;
    const endProd = startProd + pageSize;
    let allProducts: any;

    if(this.allProd){
      allProducts = this.productService.getAllProducts();
    }
    else{
      allProducts = this.productCatService.getAllCatProducts();
    }

    this.products = allProducts.slice(startProd, endProd);
    // console.log(this.products);

  }

  setPagination(pagination: {}) {

    this.length = pagination['length'];
    this.pageSize = pagination['pageSize'];
    this.pageSizeOptions = pagination['pageSizeOptions'];
  }

  addToCart(product:{}){
    this.shoppingCart.setItemsToCart(product);
    this.shoppingCart.getCartItemCount(this.shoppingCart.getItemsFromCart().length);
  }



}