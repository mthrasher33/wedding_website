import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';


  const appRoutes: Routes = [
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full',
      data: {pageTitle: "Home"}
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
