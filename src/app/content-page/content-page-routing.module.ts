import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentPageComponent } from './content-page.component';

const contentPageRoutes: Routes = [
  { path: 'accommodations',  component: ContentPageComponent, data: {pageTitle: "Accommodations", heroImage: "purpleBubbles.jpg", contentKey: "accommodations"}},
  { path: 'events',  component: ContentPageComponent, data: {pageTitle: "Schedule of Events", heroImage: "purpleBubbles.jpg", contentKey: "events"}},
  { path: 'registry',  component: ContentPageComponent, data: {pageTitle: "Registry", heroImage: "purpleBubbles.jpg", contentKey: "registry"}},
  { path: 'story',  component: ContentPageComponent, data: {pageTitle: "Our Story", heroImage: "purpleBubbles.jpg", contentKey: "story"}},
  { path: 'wedding-party',  component: ContentPageComponent, data: {pageTitle: "Wedding Party", heroImage: "purpleBubbles.jpg", contentKey: "weddingParty"}},
  { path: 'recommendations',  component: ContentPageComponent, data: {pageTitle: "Our Favorite Places", heroImage: "purpleBubbles.jpg", contentKey: "recommendations"}},
  { path: 'venue',  component: ContentPageComponent, data: {pageTitle: "Venue", heroImage: "purpleBubbles.jpg", contentKey: "venue"}},
];

@NgModule({
  imports: [RouterModule.forRoot(contentPageRoutes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [
    RouterModule
  ]
})
export class ContentPageRoutingModule { }