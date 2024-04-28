import { Component } from '@angular/core';
import { useBemm } from 'bemm';

@Component({
  selector: 'movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  bemm = useBemm('movie-card');

}
