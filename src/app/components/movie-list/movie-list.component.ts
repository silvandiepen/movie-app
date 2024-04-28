import { Movie } from '@/store/movies/movies.model';
import { Component, OnInit } from '@angular/core';
import { useBemm } from "bemm";
import { Subject } from 'rxjs';
import { MovieService } from '@/services/movies.service';

@Component({
  standalone: true,
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();

  bemm = useBemm('movie-list');
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getAll().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}