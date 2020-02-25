import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {
  smartphones: any = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.smartphones = [];
    this.getSmartphones();
  }

  getSmartphones() {
    this.api.getSmartphone()
      .subscribe(data => {
        for (const d of (data as any)) {
          this.smartphones.push({
            name: d.name,
            price: d.price
          });
        }
        console.log(this.smartphones);
      });
  }

}
