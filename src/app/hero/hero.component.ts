import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit, OnChanges {
  imagePath: String = "";
  @Input('master') masterBackgroundImage: string;


  constructor(private api: ApiService) {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['masterBackgroundImage'] && this.masterBackgroundImage) {
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
