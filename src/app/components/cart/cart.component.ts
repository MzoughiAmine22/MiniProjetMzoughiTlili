import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  grandTotal:number = 0;
  products : any[];
  constructor(private cartService:CartService) { }


  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res =>{
      this.products = res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }
  removeItem(item :any)
  {
    this.cartService.removeCartItem(item);
    this.grandTotal=this.grandTotal - item.price;
  }
  emptycart()
  {
    this.cartService.removeAll();
  }

  pageUp()
  {
    window.scroll(0,0);
  }
}
