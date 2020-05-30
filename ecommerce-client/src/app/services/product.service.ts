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
  // async getOrderList(){

    var userDetail;
    // this.user.getUserDetail();
     let userOrders =  this.user.getUser().subscribe((user) => {
       console.log(user);
       userDetail = user;
      // let orders = this._http.get(`${this.baseUrl}/order/`+user['email']);
      // console.log(orders);
      // return orders;
    });

    let productDetails = this._http.get<Object[]>(`${this.baseUrl}/order/`+userDetail['email']);

    // productDetails = this.getOrderProducts(productDetails);

    // return productDetails;

    return this._http.get(`${this.baseUrl}/order/`+userDetail['email']);

    // return this._http.get(`${this.baseUrl}/order`);
  }


  async getOrderProducts(productDetails:any){
    // console.log(productDetails);
    // for(let user of productDetails){
      // let productId = user['product'].split(",");
      let productId = productDetails.split(",");
      let productArr = [];
      for(let id in productId){
        this.getProductDetail(Number(productId[id])).subscribe(data => {
          // console.log(data);
          let product = JSON.parse(data);
          productArr.push(product);       
        },()=>{console.log(productArr)});
        // let product = await this.getProductDetail(Number(id));
        // productArr.push(product);
      }
      // user['product'] = productArr;
    // }

    // console.log(productArr);
    // return productArr;

  }





}


