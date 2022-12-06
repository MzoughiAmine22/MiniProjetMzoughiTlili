import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignupUsers } from '../classes/signup-users';

const URL1="http://localhost:3500/adminLog/1";
const URL2="http://localhost:3500/signupusers?email=";
const URL3="http://localhost:3500/signupusers";
@Injectable({
  providedIn: 'root'
})
export class CharService {

  constructor(private http:HttpClient) { }

  getAd():Observable<any>
  {
    return this.http.get<any>(URL1);
  }
  changerMdp(block:any)
  {
    return this.http.put<any>(URL1,block);
  }

  getUser(crit:string):Observable<any>
  {
    return this.http.get<any>(URL2+crit);
  }
  changerMdpU(block:any,id:number)
  {
    return this.http.put<any>(URL3+"/"+id,block);
  }

  getUsers():Observable<any>
  {
    return this.http.get<any>(URL3);
  }



}
