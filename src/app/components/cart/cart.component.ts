import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  total:number = 0;
  products : any[];
  constructor(private cartService:CartService) { }


  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res =>{
      this.products = res;
      this.total=this.cartService.getTotalPrice();
    })
  }
  removeItem(item :any)
  {
    this.cartService.removeCartItem(item);
    this.total=this.total-1;
  }
  emptycart()
  {
    this.cartService.removeAll();
  }
}
