import { Component, OnInit } from '@angular/core';
import { SignupUsers } from 'src/app/classes/signup-users';
import { CharService } from 'src/app/services/char.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private us:CharService) { }

  users:SignupUsers[];

  ngOnInit(): void {
    this.us.getUsers().subscribe( res =>{
      this.users=res;
    })
  }
  change()
  {
    
  }
}
