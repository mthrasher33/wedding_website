import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {

  constructor(route: ActivatedRoute,private _location: Location) { 
    const heroBackgroundImage:String = route.snapshot.data['heroImage'];
    const title:String = route.snapshot.data['pageTitle'];
    this.heroBackgroundImage = heroBackgroundImage;
    this.pageTitle = title;
  }
  heroBackgroundImage: String = "";
  pageTitle: String = "";
  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

}
