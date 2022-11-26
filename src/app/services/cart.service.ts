import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartItemList:any[];
  productList = new BehaviorSubject<any>([]);
  constructor() { }
  getProducts()
  {
    return this.productList.asObservable();
  }
  setProduct(product:any)
  {
    this.cartItemList.push(product);
    this.productList.next(product);
  }
  addtoCart(product:any)
  {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  getTotalPrice() : number
  {
    var total = 0;
    this.cartItemList.map((a:any)=>{
      total = total + a.total;
    });
    return total;
  }
  removeCartItem(product:any)
  {
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id === a.id)
      {
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAll()
  {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
