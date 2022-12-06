import { Portal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartItemList:any=[];
  productList = new BehaviorSubject<any>([]);
  constructor() { }
  getProducts()
  {
    return this.productList.asObservable();
  }
  addtoCart(product:Product)
  {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
  }
  getTotalPrice():number
  {
    let grandTotal:number = 0 ;
    for(let i=0;i<this.cartItemList.length;i++)
    {
      grandTotal=grandTotal+Number(this.cartItemList[i].price);
    }
    return grandTotal;
  }
  removeCartItem(product:Product)
  {
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id === a.id)
      {
        this.cartItemList.splice(index,1);
      }
    })
  }
  removeAll()
  {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
