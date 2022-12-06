import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router ) { }
  loginForm:FormGroup;
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email: ['',[Validators.required,Validators.max(1)]],
      password:['',Validators.required]
    });
  }
  login()
  {   
    this.auth.loginAd().subscribe(res =>{
      var user = res.find((a:any)=>{
        return(a.email === this.loginForm.value.email && a.password === this.loginForm.value.password )
      });
      if(user)
      {
        alert("Login Success");
        localStorage.setItem('userType','admin');
        this.loginForm.reset(); 
        this.router.navigate(['admin']);
      }
      else
      {
        alert("Login Invalid");
        this.loginForm.reset();
      }
    },()=>{
      alert("Something went wrong");
    })
  }


}
