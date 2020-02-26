import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentPageComponent } from './content-page.component';

const contentPageRoutes: Routes = [
  { path: 'accommodations',  component: ContentPageComponent, data: {pageTitle: "Accommodations", heroImage: "icePic.jpg"}},
  { path: 'events',  component: ContentPageComponent, data: {pageTitle: "Schedule of Events", heroImage: "icePic.jpg"}},
  { path: 'registry',  component: ContentPageComponent, data: {pageTitle: "Registry", heroImage: "icePic.jpg"}},
  { path: 'story',  component: ContentPageComponent, data: {pageTitle: "Our Story", heroImage: "icePic.jpg"}},
  { path: 'wedding-party',  component: ContentPageComponent, data: {pageTitle: "Wedding Party", heroImage: "icePic.jpg"}},
  { path: 'recommendations',  component: ContentPageComponent, data: {pageTitle: "Recommendations", heroImage: "icePic.jpg"}},
  { path: 'venue',  component: ContentPageComponent, data: {pageTitle: "Venue", heroImage: "icePic.jpg"}},
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