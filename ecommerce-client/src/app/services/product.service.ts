import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8180/api/products';
  private allProducts = [];
  private allProdPagination = {
    length : 100,
    pageSize: 20,
    pageSizeOptions : [10, 20, 100]
  }
  

  constructor(private _http: HttpClient) { }

  getProductList(){

    return this._http.get(this.baseUrl,{responseType: 'text'});

  }

  getAllProducts(){
    return this.allProducts;
  }
  setAllProducts(allProducts){
    this.allProducts = allProducts;
  }

  getSearchResults(name:String){
    return this._http.get(`${this.baseUrl}/search/${name}`,{responseType: 'text'});
  }

  getProductDetail(id:Number){
    return this._http.get(`${this.baseUrl}/${id}`,{responseType: 'text'});
  }

  getAllProdPagination(){
    return this.allProdPagination;
  }





}


