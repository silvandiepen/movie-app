import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { Route, RouterModule } from '@angular/router';
import { HomeView } from './views/home/home.component';
import { MovieView } from './views/movie/movie.component';

export const routes: Route[] = [
  {
    path: '',
    component: HomeView
  },
  {
    path: 'movie',
    component: MovieView
  },
];


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}), // Add this line
    EffectsModule.forRoot([]), // And this line
  ],
})
export class AppModule { }