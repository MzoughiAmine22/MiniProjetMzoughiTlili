import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute) { }
  products:Product[];
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => { this.products = data,console.log(this.products);});
  }
  

}
