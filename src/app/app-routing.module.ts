import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const APP_ROUTES: Routes = [
  { 
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) 
  },
  { 
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  }
];


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
