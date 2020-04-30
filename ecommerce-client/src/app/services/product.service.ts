import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8181/api/products';

  constructor(private _http: HttpClient) {

  }



  getProductList(){
  // getProductList(): Observable<Product[]> {
  //   return this._http.get<GetResponse>(this.baseUrl).pipe(
  //     map(response => response._embedded.products)
  //   );


    return this._http.get(this.baseUrl,{responseType: 'text'});
  }

}


interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
