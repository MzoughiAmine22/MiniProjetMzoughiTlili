import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authS:AuthService,private route:Router){}
  canActivate() {
    /*var yes:boolean;
    this.authS.getAdmin().subscribe(data => {
      if(data.id === 1 && data.admin)
      {
         yes=true;
      }
    });
    if(yes)
    {
      return true;
    }
    alert('U cant access');
    return false;*/
    var role = localStorage.getItem("userType");
    if( role == "admin")
    {
      return true;
    }
    alert('You do not have administrator rights');
    this.route.navigate(['landing']);
    return false;
  }
  
}
