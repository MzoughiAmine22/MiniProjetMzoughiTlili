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
    this.searchKey=this.searchTerm;
  }
  constructor(private productService:ProductService) { }
  products:Product[];
  filterCategory:Product[];
  ngOnInit(): void 
  {
    this.productService.getProducts().subscribe(data => {
       this.products = data;
       this.filterCategory=data;
      });
  }
  categ(category:string)
  {
    this.filterCategory=this.products.filter((a:any)=>{
      if(a.category== category || category == '')
      {
        return(a);
      }
    })
  }

  pageUp()
  {
    window.scroll(0,0);
  }
}
