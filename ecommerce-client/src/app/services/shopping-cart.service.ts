import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private itemsInCart: any = [];
  private noOFItems = new BehaviorSubject(0);
  currentnoOfItemsCart = this.noOFItems.asObservable();
  // public cartItemsID = new BehaviorSubject(null);
  // currentcartItemsID = this.cartItemsID.asObservable();
  public cartItemsID: any = []
  totalPrice:number=0.0;

  constructor() { }

  getItemsFromCart() {
    return this.itemsInCart;
  }

  setItemsToCart(item: any) {
    item['quantity'] = 1;
    // item['unitPrice'] = item['unitPrice'] - 1;
    this.itemsInCart.push(item);
    // this.cartItemsID.push(item['id']);
    this.cartItemsID.push(item['id']);
  }

  getcartItemsID() {
    return this.cartItemsID;
  }

  // getCartItemCount() {
  //   this.noOFItems.next(this.itemsInCart.length);
  // }
  getCartItemCount(count: number) {
    this.noOFItems.next(count);
  }

  removeItem(item: Object) {
    const index = this.itemsInCart.findIndex(x => x.id === item['id']);
    this.itemsInCart.splice(index, 1);
    this.removeCartItemsID(item['id']);
    this.getCartItemCount(this.itemsInCart.length);
  }

  removeCartItemsID(id: number) {
    const index = this.cartItemsID.indexOf(id);
    this.cartItemsID.splice(index, 1);
  }

  setTotalPrice(price:number){
    this.totalPrice = price;
  }

  getTotalPrice(){
    return this.totalPrice;
  }

  clearShoppingCart(){
    this.itemsInCart = [];
    this.getCartItemCount(0);
    this.cartItemsID = [];
  }

}
