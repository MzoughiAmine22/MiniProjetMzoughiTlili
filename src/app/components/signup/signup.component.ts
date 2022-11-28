import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }

  signUp()
  {
    this.http.post<any>("http://localhost:3500/signupUsers",this.signupForm.value)
    .subscribe( res =>
      {alert("Signup Suceessfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Something went wrong")});
  }
  ngOnInit(): void {
    this.signupForm=this.fb.group({
      fullname:[''],
      email:[''],
      password:[''],
      mobile:[''],
      admin:[false]
    })
  }
  

}
