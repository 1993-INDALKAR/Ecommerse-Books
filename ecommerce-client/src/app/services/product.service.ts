import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8181/api/products';

  constructor(private _http: HttpClient) { }

  getProductList(){
    // getProductList(): Observable<Product[]> {
      // return this._http.get<GetResponse>(this.baseUrl).pipe(
      //   map(response => response._embedded.products)
      // );
  
  
      return this._http.get(this.baseUrl,{responseType: 'text'});
    }

    returnObservable(): Observable<any> {
      
      const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

      const requestOptions: Object = {
        /* other options here */
        headers : headers,
        responseType: 'text'
      }


      let data = this._http.get<GetResponse>(this.baseUrl , requestOptions);
      console.log("services");
      console.log(JSON.stringify(data));
      console.log(JSON.parse(JSON.stringify(data)));
      // console.log(Array.isArray(data));
      return data.pipe(
        map(response => {
          
          console.log(response);
          response._embedded.products})
      );
    }




  
  }

  interface GetResponse {
    _embedded: {
      products: Product[];
    }

}
