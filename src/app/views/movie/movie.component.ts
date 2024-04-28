import { Component } from '@angular/core';
import { useBemm } from "bemm";

@Component({
  standalone: true,
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieView {
   bemm = useBemm('movie');

   constructor() {
      console.log('MovieView is loaded');
    }
}
