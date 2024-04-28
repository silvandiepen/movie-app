import { useBemm } from "bemm";
import { Component } from '@angular/core';
import { MovieListComponent } from "@/components/movie-list/movie-list.component";


@Component({
  standalone: true,
  selector: 'home',
  imports:[MovieListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeView {
  bemm = useBemm('home');
  constructor() {
    console.log('HomeView is loaded');
  }
}
