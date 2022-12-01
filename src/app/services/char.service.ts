import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL="http://localhost:3500/signupUsers/1";
@Injectable({
  providedIn: 'root'
})
export class CharService {

  constructor(private http:HttpClient) { }

  changerMdp(block:any)
  {
    return this.http.put<string>(URL,block);
  }

}
