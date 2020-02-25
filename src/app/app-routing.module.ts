import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';


  const appRoutes: Routes = [
    { path: 'crisis-center', component: FooterComponent },
    { path: 'hero/:id',      component: FooterComponent },
    //{
    //  path: 'home',
    //  component: FooterComponent,
    //  data: { title: 'Heroes List' }
    //},
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    //{ path: '**', component: FooterComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
