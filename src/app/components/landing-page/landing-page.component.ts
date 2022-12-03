import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {


  offm()
  {
    var di=document.getElementById("di");
    di.setAttribute("style","transform: scaleY(1);transition: 0.7s;");
  }
  onm()
  {
    var di=document.getElementById("di");
    di.setAttribute("style","transform: scaleY(1.1);transition: 0.7s;")
  }


  products: Product[];

  
  constructor(private proSer:ProductService) { }

  ngOnInit(): void {
    this.proSer.getProducts().subscribe(data => { this.products = data});
  }

  pageUp()
  {
    window.scroll(0,0);
  }
}
