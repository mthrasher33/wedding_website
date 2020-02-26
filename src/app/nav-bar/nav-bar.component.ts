import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  hideMobileMenu : Boolean = true; 
  constructor() { }

  ngOnInit(): void {

  }
toggleMenu() {
  this.hideMobileMenu = !this.hideMobileMenu;
  console.log(this.hideMobileMenu);
}
}
