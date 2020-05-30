import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';
import { ShoppingCartService } from "./shopping-cart.service";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8180/api/products';
  private allProducts = [];
  private allProdPagination = {
    length: 100,
    pageSize: 20,
    pageSizeOptions: [10, 20, 100]
  }
  searchProduct: Object = {};


  constructor(private _http: HttpClient, private shoppingCart: ShoppingCartService,
    private user: AuthService) { }

  getProductList() {

    return this._http.get(this.baseUrl, { responseType: 'text' });

  }

  getAllProducts() {
    return this.allProducts;
  }
  setAllProducts(allProducts) {
    this.allProducts = allProducts;
  }

  getSearchResults(name: String) {
    return this._http.get(`${this.baseUrl}/search/${name}`, { responseType: 'text' });
  }

  getProductDetail(id: Number) {
    return this._http.get(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAllProdPagination() {
    return this.allProdPagination;
  }

  setsearchProduct(product, id) {
    this.searchProduct = {
      "name": product,
      "id": id
    };
    console.log(this.searchProduct);
  }

  getSearchProduct() {
    return this.searchProduct;
  }


  async updateProduct() {
    console.log("Product services update product")
    var products = this.shoppingCart.getItemsFromCart();
    var user = {};
    await this.user.getUser().subscribe((user) => {
      user = user;
      var quantity = 0;
      // console.log(products);

      for (let i = 0; i < products.length; i++) {
        products[i]['unitsInStock'] = products[i]['unitsInStock'] - products[i]['quantity'];
        quantity += products[i]['quantity'];
        console.log(products[i]);
      }
      return this._http.post(`${this.baseUrl}/update/${user['email']}/${quantity}`, products).subscribe();
    });;
    // var quantity = 0;
    // // console.log(products);

    // for (let i = 0; i < products.length; i++) {
    //   products[i]['unitsInStock'] = products[i]['unitsInStock'] - products[i]['quantity'];
    //   quantity += products[i]['quantity'];
    //   console.log(products[i]);
    // }
    // return this._http.get(`${this.baseUrl}/${user['email']}/${quantity}`, products).subscribe();
  }

  getOrderList():Observable<Object> {
    return this._http.get(`${this.baseUrl}/order`);
  }




}


