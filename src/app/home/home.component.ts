import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService) { }
  heroBackgroundImage: String = "";

  ngOnInit(): void {
    this.getHomeHeroBackgroundImage();
  };

  getHomeHeroBackgroundImage() {
    this.api.getHomeHeroImageUrl()
      .subscribe(data => {
        for (const d of (data as any)) {
          this.heroBackgroundImage = d.url
        }
        console.log(this.heroBackgroundImage);
      });
  }
}
