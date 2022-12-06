import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL1="http://localhost:3500/signupUsers";
const URL2="http://localhost:3500/adminLog";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient ) { }

  login():Observable<any>
  {
    return(this.http.get<any>(URL1));
  }

  loginAd():Observable<any>
  {
    return this.http.get<any>(URL2);
  }
}
