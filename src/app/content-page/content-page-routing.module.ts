import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentPageComponent } from './content-page.component';

const contentPageRoutes: Routes = [
  { path: 'accommodations',  component: ContentPageComponent, data: {pageTile: "Accommodations", heroImage: "icePic.jpg"}},
  { path: 'events',  component: ContentPageComponent, data: {pageTile: "Schedule of Events", heroImage: "icePic.jpg"}},
  { path: 'registry',  component: ContentPageComponent, data: {pageTile: "Registry", heroImage: "icePic.jpg"}},
  { path: 'story',  component: ContentPageComponent, data: {pageTile: "Our Story", heroImage: "icePic.jpg"}},
  { path: 'wedding-party',  component: ContentPageComponent, data: {pageTile: "Wedding Party", heroImage: "icePic.jpg"}},
  { path: 'recommendations',  component: ContentPageComponent, data: {pageTile: "Recommendations", heroImage: "icePic.jpg"}},
  { path: 'venue',  component: ContentPageComponent, data: {pageTile: "Venue", heroImage: "icePic.jpg"}},
];

@NgModule({
  imports: [
    RouterModule.forChild(contentPageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContentPageRoutingModule { }