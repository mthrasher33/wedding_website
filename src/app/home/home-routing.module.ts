import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { FooterComponent } from './../footer/footer.component';

const homeRoutes: Routes = [
  { path: 'home',  component: HomeComponent, data: {pageTitle: "Home"}},
];

@NgModule({
  imports: [RouterModule.forRoot(homeRoutes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }