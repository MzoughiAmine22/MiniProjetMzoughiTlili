import { Component,  HostBinding,  HostListener, OnInit  } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  

  remove()
  {

    var t=document.querySelector("mat-toolbar");
    t.removeAttribute("class");

  }
  constructor(private cartService:CartService) { }
  
  ngOnInit(): void {
    
    this.cartService.getProducts().subscribe(res => {

    })
  }
  

    

}
