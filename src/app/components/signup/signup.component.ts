import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  get email()
  {
    return this.signupForm.get('email');
  }
  get password()
  {
    return this.signupForm.get('password');
  }
  signUp()
  {
    if(this.signupForm.valid)
    {
    this.http.post<any>("http://localhost:3500/signupUsers",this.signupForm.value)
    .subscribe( res =>
      {alert("Signup Suceessfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Something went wrong")});
    }
  }
  ngOnInit(): void {
    this.signupForm=this.fb.group({
      fullname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      mobile:['',Validators.required],
      admin:[false]
    })
  }
  

}
