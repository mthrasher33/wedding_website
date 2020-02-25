import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from './../hero/hero.component';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  { path: 'home',  component: HomeComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }