import { Component,  HostBinding,  HostListener, OnInit  } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  hide()
  {
    if(localStorage.getItem('userType')=='admin')
    {
      return true;
    }
    return false;
  }
  hide2()
  {
    if(localStorage.getItem('userType')=='user')
    {
      return true;
    }
    return false;
  }

  remove()
  {

    var t=document.querySelector("mat-toolbar");
    t.removeAttribute("class");

  }
  constructor() { }
  ngOnInit(): void {
    this.hide();
  }
  
  desc()
  {
    localStorage.clear();
  }
    

}
