import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CharService } from 'src/app/services/char.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {
  adminStuff:any;
  constructor(private fb:FormBuilder,private http:HttpClient,private charServ:CharService ,private router:Router ) { }
  passForm
  ngOnInit(): void {
    this.passForm=this.fb.group({
      email:['',Validators.required],
      oldPass: ['',Validators.required],
      password:['',Validators.required]
    });
    this.http.get<any>("http://localhost:3500/signupUsers/1")
    .subscribe(res =>{
      this.adminStuff=res
      });
  }
  changePass()
  {
    if(this.passForm.valid && this.passForm.value['email'] == this.adminStuff.email && this.passForm.value['oldPass']==this.adminStuff.password)
    {
      this.adminStuff.password=this.passForm.value['password'];
      this.charServ.changerMdp(this.adminStuff).subscribe(res=>
        {
        alert('password changed'),
        this.passForm.reset(),
        this.router.navigate(['landing'])
        }
        );  
    }
    else
    {
      alert('Invalid');
      this.passForm.reset();
    }
  }
}
