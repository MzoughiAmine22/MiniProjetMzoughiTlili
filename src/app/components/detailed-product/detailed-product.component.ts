import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Commentaires } from 'src/app/classes/commentaires';

@Component({
  selector: 'app-detailed-product',
  templateUrl: './detailed-product.component.html',
  styleUrls: ['./detailed-product.component.scss']
})
export class DetailedProductComponent implements OnInit {

 
  noDiv1:boolean;
  noDiv2:boolean;
  noDiv3:boolean;
  converted: number;
  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute,private cartService:CartService,private fb:FormBuilder ) { }

  product:Product;
  productList:Product[];
  comment:Commentaires={name:'amine',message:'ok'};
  comments:Commentaires[];
  commentForm:FormGroup;
  idd:number = 0;
  convert:number;
  ngOnInit(): void 
  {
    
    this.idd=this.activatedRoute.snapshot.params['id'];
    this.productService.getProduitById(this.idd).subscribe(data=>{
      {this.product=data;
      this.comments=data.comments}});
    this.productService.getProducts().subscribe(data =>{
      this.productList=data;
    });
    this.commentForm=this.fb.nonNullable.group({
      name:['',Validators.required],
      message:['',Validators.required]
    })
  }

  addtocart(item:any)
    {
      this.cartService.addtoCart(item);
      alert('Product Added To Cart');
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

  clickCom()
  {
    this.noDiv3=true;
  }

  convertt() {
    this.productService
      .getCurrency('TND','EUR')
      .subscribe((data: any) => {
        let money: any = this.product.price;
        this.converted = money * data;
      });
  }


  addcomment()
  {
    if(this.commentForm.valid)
    {
      this.comment.name=this.commentForm.value['name'];
      this.comment.message=this.commentForm.value['message'];
      this.product.comments.push(this.comment);
      this.productService.putProduct(this.product,this.product.id).subscribe(data =>{
      alert('comment added');
      this.productService.getProduitById(this.product.id).subscribe(data =>{
        this.product=data;
      })
      this.commentForm.reset();
      
    });
    }
    else
    {
      alert('U need to fill the form inputs');
    }
  
  }
}
