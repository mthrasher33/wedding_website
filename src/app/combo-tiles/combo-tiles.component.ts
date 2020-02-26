import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'combo-tiles',
  templateUrl: './combo-tiles.component.html',
  styleUrls: ['./combo-tiles.component.css']
})
export class ComboTilesComponent implements OnInit {
  comboTiles: any = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.comboTiles = [];
    this.getComboTiles();

  }

  getComboTiles() {
    this.api.getComboTiles()
      .subscribe(data => {
        for (const d of (data as any)) {
          this.comboTiles.push({
            header: d.header,
            //sub: d.sub,
            url: d.url,
            icon: d.icon
          });
        }
      });
  }

}
