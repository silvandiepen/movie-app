import { Component, OnInit } from '@angular/core';
import { useBemm } from "bemm";
import { MovieService } from '../../services/movie.service';

@Component({
  standalone: true,
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  bemm = useBemm('movie-list');
 
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.movies.subscribe(movies => {
      this.movies = movies;
    });

    this.movieService.fetchMovies('');
  }

}