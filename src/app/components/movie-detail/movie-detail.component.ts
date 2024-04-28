import { Component } from '@angular/core';
import { useBemm } from "bemm";

@Component({
  selector: 'movie-detail',
  standalone: true,
  imports: [],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent {
  bemm = useBemm('movie-detail');

}
