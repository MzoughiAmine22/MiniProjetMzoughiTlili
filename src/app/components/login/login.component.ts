import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router ) { }
  loginForm:FormGroup;
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email: ['',Validators.required],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  get email()
  {
    return this.loginForm.get('email');
  }
  get password()
  {
    return this.loginForm.get('password');
  }
  
  login()
  {
    this.auth.login().subscribe(res =>{
      var user = res.find((a:any)=>{
        return(a.email === this.loginForm.value.email && a.password === this.loginForm.value.password )
      });
      if(user)
      {
        alert("Login Success");
        localStorage.setItem('userType','user');
        this.loginForm.reset(); 
        this.router.navigate(['landing']);
      }
      else
      {
        alert("Login Invalid");
        this.loginForm.reset();
        this.router.navigate(['login']);
      }
    },()=>{
      alert("Something went wrong");
    })
  }

}
