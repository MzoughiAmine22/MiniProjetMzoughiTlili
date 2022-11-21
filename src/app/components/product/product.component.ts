import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() prod:Product;
  @Input() i:number;
  constructor() { }
  ngOnInit(): void 
  {
    
  }
  }


