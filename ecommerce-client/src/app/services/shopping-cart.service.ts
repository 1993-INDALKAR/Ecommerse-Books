import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private itemsInCart:any = [];
  private noOFItems = new BehaviorSubject(0);
  currentnoOfItemsCart = this.noOFItems.asObservable();
  // public cartItemsID = new BehaviorSubject(null);
  // currentcartItemsID = this.cartItemsID.asObservable();
  public cartItemsID:any=[]

  constructor() { }

  getItemsFromCart(){
    return this.itemsInCart;
  }

  setItemsToCart(item:any){
    this.itemsInCart.push(item);
    // this.cartItemsID.push(item['id']);
    this.cartItemsID.push(item['id']);
  }

  getcartItemsID(){
    return this.cartItemsID;
  }

  getCartItemCount() {
    this.noOFItems.next(this.itemsInCart.length);
  }
  
}
