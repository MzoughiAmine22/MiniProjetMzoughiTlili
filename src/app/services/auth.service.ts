import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL="http://localhost:3500/signupUsers";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient ) { }

  getAdmin()
  {
    return !!localStorage.getItem('token');
  }
}
