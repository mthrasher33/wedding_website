import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContentPageRoutingModule } from './content-page-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContentPageComponent } from './content-page.component';
import { ContentPageHeroComponent } from './../content-page-hero/content-page-hero.component';
import { ContentPageBodyComponent } from './../content-page-body/content-page-body.component';

@NgModule({
  declarations: [
    ContentPageComponent,
    ContentPageHeroComponent,
    ContentPageBodyComponent
  ],
  imports: [
    CommonModule,
    ContentPageRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule  
  ]
})
export class ContentPageModule { }
