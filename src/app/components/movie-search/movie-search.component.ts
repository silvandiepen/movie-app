import { Component } from '@angular/core';
import { useBemm } from 'bemm';

@Component({
  selector: 'movie-search',
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss'
})
export class MovieSearchComponent {
  bemm = useBemm('movie-search');
}
