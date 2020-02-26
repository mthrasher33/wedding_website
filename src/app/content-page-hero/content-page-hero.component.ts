import { Component, OnInit, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'content-page-hero',
  templateUrl: './content-page-hero.component.html',
  styleUrls: ['./content-page-hero.component.css']
})
export class ContentPageHeroComponent implements OnInit, OnChanges {
  imagePath: String = "";
  @Input('master') masterBackgroundImage: string;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['masterBackgroundImage']) {
      this.getImagePath(this.masterBackgroundImage);
    }
  }

getImagePath(fileName: String) {
  this.setBackgroundImage(this.api.getImagePath(fileName));
}

setBackgroundImage(path: String){
  this.imagePath = path;
}

}
