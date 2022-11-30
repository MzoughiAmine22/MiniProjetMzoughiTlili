import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../classes/product';

const URL = 'http://localhost:3500/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor(private http:HttpClient) { }
  getProducts():Observable<Product[]>
  {
    return(this.http.get<Product[]>(URL));
  }
  getProduitById(id:number):Observable<Product>
 {
    return this.http.get<Product>(URL+"/"+id);
 }

 addProduct(p:Product)
 {
  return this.http.post<Product>(URL,p);
 }  
}
