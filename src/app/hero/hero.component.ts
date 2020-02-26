import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit, OnChanges {
  smartphones: any = [];
  imagePath: String = "";
  @Input('master') masterBackgroundImage: string;


  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.smartphones = [];
    this.getSmartphones();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['masterBackgroundImage'] && this.masterBackgroundImage) {
      this.getImagePath(this.masterBackgroundImage);
    }
``}

  getSmartphones() {
    this.api.getSmartphone()
      .subscribe(data => {
        for (const d of (data as any)) {
          this.smartphones.push({
            name: d.name,
            price: d.price
          });
        }
      });
  }

  getImagePath(fileName: String) {
    this.setBackgroundImage(this.api.getImagePath(fileName));
  }

  setBackgroundImage(path: String){
    this.imagePath = path;
  }
}
