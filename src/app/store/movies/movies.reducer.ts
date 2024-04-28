import { createReducer, on } from '@ngrx/store';
import { MoviesState } from './movies.model';
import { loadMovies, loadMoviesSuccess, loadMoviesFailure } from './movies.actions';

export const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null
};

export const moviesReducer = createReducer(
  initialState,
  on(loadMovies, state => ({ ...state, loading: true })),
  on(loadMoviesSuccess, (state, { movies }) => ({ ...state, movies, loading: false })),
  on(loadMoviesFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
