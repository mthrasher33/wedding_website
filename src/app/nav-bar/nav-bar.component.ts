import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class NavBarComponent implements OnInit {
  hideMobileMenu : Boolean = true; 
  constructor(private _eref: ElementRef) { }

  ngOnInit(): void {

  }
  toggleMenu() {
    this.hideMobileMenu = !this.hideMobileMenu;
  }
  onClick(event) {
    const className : String = event.target.className;
    console.log(className);
    if (className !== 'mobileLink' && className.indexOf('openMobileMenu') === -1 ){ //click outside mobile menu 
    this.hideMobileMenu = true; 
   }
  }

}
