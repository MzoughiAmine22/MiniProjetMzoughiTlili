import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../classes/product';
import { identifierName } from '@angular/compiler';

const URL = 'http://localhost:3500/products/';
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

 putProduct(data:Product,id:number)
 {
  return this.http.put<Product>(URL+id,data);
 }

 putVar(data:Product,id :number)
 {
  return this.http.patch<Product>(URL+id,data);
 }

 deleteProduct(id:number)
 {
  return this.http.delete<Product>(URL+id);
 }

 getCurrency(have: String, want: String): Observable<Number> {
  var adreqHeader = new HttpHeaders({
    'X-RapidAPI-Key': '10281b1538msh9a7b91ebc042434p193852jsn4478e61a4d09',
    'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
  });
  return this.http.get<Number>(`https://currency-exchange.p.rapidapi.com/exchange?from=${have}&to=${want}`,{ headers: adreqHeader });
 }
 
}
