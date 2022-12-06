import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupUsers } from 'src/app/classes/signup-users';
import { CharService } from 'src/app/services/char.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {
  user:SignupUsers;
  
  constructor(private fb:FormBuilder,private charServ:CharService ,private router:Router ) { }
  passForm:FormGroup;
  ngOnInit(): void {
    this.passForm=this.fb.group({
      email:['',Validators.required],
      oldPass: ['',Validators.required],
      password:['',Validators.required]
    });
    this.passForm.get('email')?.setValue('ex');
    this.passForm.get('oldPass')?.setValue('ex');
    this.passForm.get('password')?.setValue('ex');
  }
  sub()
  {
    this.charServ.getUser(this.passForm?.value['email']).subscribe(res =>{
      this.user=res;
    });
  }
  changePass()
  {
    this.sub();
    if(this.passForm?.valid && this.passForm?.value['email'] == this.user[0]?.email && this.passForm?.value['oldPass']==this.user[0]?.password)
    {
      this.user[0].password=this.passForm?.value['password'];
      this.charServ.changerMdpU(this?.user[0],this.user[0]?.id).subscribe(()=>
        {
        alert('password changed'),
        this.passForm?.reset(),
        this.router.navigate(['login'])
        }
        );  
    }
    else
    {
      alert('Invalid');
      this.passForm?.reset();
    }
  }
}
