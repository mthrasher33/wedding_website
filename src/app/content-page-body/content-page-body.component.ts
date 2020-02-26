import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'content-page-body',
  templateUrl: './content-page-body.component.html',
  styleUrls: ['./content-page-body.component.css']
})
export class ContentPageBodyComponent implements OnInit {
  content: any = [];
  @Input('contentKey') pageTitle: string;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getContent(this.pageTitle);
  }

  
  getContent(pageTitle: String) {
    this.api.getContent(pageTitle).
      subscribe(data => {
        this.content = data[0];
        console.log(this.content);
      });
  }
}
