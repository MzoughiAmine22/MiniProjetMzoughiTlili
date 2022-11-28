import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/classes/product';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  noShow:boolean;
  
  

  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute,private http:HttpClient,auth:AuthService) 
  {
   }
   admin:any;
  products:Product[];
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => { this.products = data,console.log(this.products);});
    this.http.get<any>("http://localhost:3500/signupUsers").subscribe(res =>
      {
        this.admin=res;
      })
  }
  

}
