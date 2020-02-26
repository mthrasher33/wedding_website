import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentPageComponent } from './content-page.component';

const contentPageRoutes: Routes = [
  { path: 'accommodations',  component: ContentPageComponent, data: {pageTile: "Accommodations"}},
  { path: 'events',  component: ContentPageComponent, data: {pageTile: "Schedule of Events"}},
  { path: 'registry',  component: ContentPageComponent, data: {pageTile: "Registry"}},
  { path: 'story',  component: ContentPageComponent, data: {pageTile: "Our Story"}},
  { path: 'wedding-party',  component: ContentPageComponent, data: {pageTile: "Wedding Party"}},
  { path: 'recommendations',  component: ContentPageComponent, data: {pageTile: "Recommendations"}},
  { path: 'venue',  component: ContentPageComponent, data: {pageTile: "Venue"}},
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