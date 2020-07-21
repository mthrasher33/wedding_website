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
    const key:String = route.snapshot.data['contentKey'];
    const title:String = route.snapshot.data['pageTitle'];
    this.heroBackgroundImage = heroBackgroundImage;
    this.contentKey = key;
    this.pageTitle = title;
  }
  heroBackgroundImage: String = "";
  contentKey: String = "";
  pageTitle: String = "";
  ngOnInit(): void {
    console.log('pageTitle', this.pageTitle);
    if(this.pageTitle.toLowerCase() === 'registry'){
      window.location.href = 'https://www.zola.com/registry/cecilyandmatthew2020'
    }
  }
}
