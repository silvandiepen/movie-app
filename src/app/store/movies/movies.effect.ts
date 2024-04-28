import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movies.model';
import { loadMovies, loadMoviesSuccess, loadMoviesFailure } from './movies.actions';
import { environment } from '../../../environments/environment.dev';

@Injectable()
export class MoviesEffects {
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(loadMovies),
    mergeMap(() => this.http.get<Movie[]>(environment.apiUrl + '/movies' + environment.apiKey)
      .pipe(
        map(movies => loadMoviesSuccess({ movies })),
        catchError(error => of(loadMoviesFailure({ error })))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}
}
