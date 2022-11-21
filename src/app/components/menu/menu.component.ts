import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  remove()
  {
    var t=document.querySelector("mat-toolbar");
    t.removeAttribute("class");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
