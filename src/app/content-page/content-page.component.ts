import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {

  constructor(route: ActivatedRoute) { 
    const heroBackgroundImage:String = route.snapshot.data['heroImage'];
    this.heroBackgroundImage = heroBackgroundImage;
  }
  heroBackgroundImage: String = "";

  ngOnInit(): void {
  }

}
