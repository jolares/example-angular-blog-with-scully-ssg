import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';


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
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
