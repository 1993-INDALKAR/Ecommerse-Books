import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {


  private url = "http://localhost:8180/product-category/categories"

  constructor(private _http: HttpClient) { }


  getProductCategories(){

    return this._http.get(this.url,{responseType: 'text'});

  }

  getProdListByCategory(id:Number){
    this._http.get(this.url+`/${id}`,{responseType: 'text'});
  }

}
