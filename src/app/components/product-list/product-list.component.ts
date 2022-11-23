import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  searchKey:string="";
  searchTerm:string="";
  search(event:any)
  {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.productService.search.next(this.searchTerm);

  }
  constructor(private fb:FormBuilder,private productService:ProductService) { }
  products:Product[];
  ngOnInit(): void 
  {
    this.productService.getProducts().subscribe(data => { this.products = data,console.log(data)});
    this.productService.search.subscribe((val:any ) =>
    {
      this.searchKey=val;
    })
  }

}
