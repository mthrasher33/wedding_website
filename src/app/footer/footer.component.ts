import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerLinks: any = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.footerLinks = [];
    this.getFooterLinks();

  }

  getFooterLinks() {
    this.api.getFooterLinks()
      .subscribe(data => {
        for (const d of (data as any)) {
          this.footerLinks.push({
            header: d.header,
            url: d.url,
            isActive: d.active
          });
        }
      });
  }

}
