import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentPageComponent } from './content-page.component';

const contentPageRoutes: Routes = [
  { path: 'accommodations',  component: ContentPageComponent, data: {pageTitle: "Accommodations", heroImage: "icePic.jpg", contentKey: "accommodations"}},
  { path: 'events',  component: ContentPageComponent, data: {pageTitle: "Schedule of Events", heroImage: "icePic.jpg", contentKey: "events"}},
  { path: 'registry',  component: ContentPageComponent, data: {pageTitle: "Registry", heroImage: "icePic.jpg", contentKey: "registry"}},
  { path: 'story',  component: ContentPageComponent, data: {pageTitle: "Our Story", heroImage: "icePic.jpg", contentKey: "story"}},
  { path: 'wedding-party',  component: ContentPageComponent, data: {pageTitle: "Wedding Party", heroImage: "icePic.jpg", contentKey: "weddingParty"}},
  { path: 'recommendations',  component: ContentPageComponent, data: {pageTitle: "Recommendations", heroImage: "icePic.jpg", contentKey: "recommendations"}},
  { path: 'venue',  component: ContentPageComponent, data: {pageTitle: "Venue", heroImage: "icePic.jpg", contentKey: "venue"}},
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