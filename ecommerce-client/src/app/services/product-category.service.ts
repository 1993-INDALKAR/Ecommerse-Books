import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {


  private url = "http://localhost:8180/product-category/categories";
  private allCatProducts = [];
  private categoryProdPagination = {
    length : 25,
    pageSize: 5,
    pageSizeOptions : [5,25]
  }

  constructor(private _http: HttpClient) { }


  getProductCategories(){

    return this._http.get(this.url,{responseType: 'text'});

  }

  getProdListByCategory(id:Number){
    return this._http.get(this.url+`/${id}`,{responseType: 'text'});
  }

  getCategoryProdPagination(){
    return this.categoryProdPagination;
  }

  getAllCatProducts(){
    return this.allCatProducts;
  }
  setAllCatProducts(allCatProducts:[]){
    this.allCatProducts = allCatProducts;
  }

}
