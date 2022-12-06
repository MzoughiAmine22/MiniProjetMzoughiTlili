import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CharService } from 'src/app/services/char.service';

@Component({
  selector: 'app-changer-pass-admin',
  templateUrl: './changer-pass-admin.component.html',
  styleUrls: ['./changer-pass-admin.component.scss']
})
export class ChangerPassAdminComponent implements OnInit {

  adminStuff:any;
  constructor(private fb:FormBuilder,private charServ:CharService ,private router:Router ) { }
  passForm:FormGroup;
  ngOnInit(): void {
    this.passForm=this.fb.group({
      email:['',Validators.required],
      oldPass: ['',Validators.required],
      password:['',Validators.required]
    });
    this.charServ.getAd().subscribe(res =>{
      this.adminStuff=res;
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
