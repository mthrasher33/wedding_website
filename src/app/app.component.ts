import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import {Router, NavigationEnd} from '@angular/router'; 

  // declare ga as a function to set and sent the events
  declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor(private titleService: Title, public router: Router ) {
    titleService.setTitle('Cecily and Matt');    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'UA-90791447-2', 
        {
          'page_path': event.urlAfterRedirects
        }
       );
      }
    });
   }

  title = 'angular-app';
}
