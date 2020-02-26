import { Component, OnInit, Input } from '@angular/core';
import { ImageCardContent } from './image-card-content';

@Component({
  selector: 'image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})

export class ImageCardComponent implements OnInit {
  @Input('content') content: ImageCardContent;
  constructor() { }

  ngOnInit(): void {
    console.log('data to image card: ', this.content);
  }

}
