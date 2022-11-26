import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-product',
  templateUrl: './detailed-product.component.html',
  styleUrls: ['./detailed-product.component.scss']
})
export class DetailedProductComponent implements OnInit {

  noDiv1:boolean;
  noDiv2:boolean;
  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute) { }
  product:Product;
  idd :number =0;
  ngOnInit(): void {
    this.idd=this.activatedRoute.snapshot.params['id'];
    this.productService.getProducts().subscribe
    (
      data =>{data.find(elt =>{if(elt.id==this.idd){this.product=elt;}})}
    );
    
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
