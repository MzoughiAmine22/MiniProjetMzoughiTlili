import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-detailed-product',
  templateUrl: './detailed-product.component.html',
  styleUrls: ['./detailed-product.component.scss']
})
export class DetailedProductComponent implements OnInit {

  noDiv1:boolean;
  noDiv2:boolean;
  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute,private cartService:CartService ) { }
  product:Product;

  idd :number;
  ngOnInit(): void {
    this.idd=this.activatedRoute.snapshot.params['id'];
    
    this.productService.getProduitById(this.idd).subscribe(data=>{
    
      {this.product=data;

    } })
  }
  addtocart(item:any)
    {
      this.cartService.addtoCart(item);
      console.log(item);
    }


  clickDesc()
  {
    this.noDiv1=false;
    this.noDiv2=true;
  }
  clickChar()
  {
    this.noDiv1=true;
    this.noDiv2=false;
  }
}
