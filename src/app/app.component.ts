import { Component } from '@angular/core';
import { RouterOutlet, RouterModule , Router, NavigationEnd} from '@angular/router';
import { useBemm } from 'bemm';

import { Movie } from '@/store/movies/movies.model';
import { HeaderComponent } from '@/components/header/header.component';
import { FooterComponent } from '@/components/footer/footer.component';
import { NavigationComponent } from '@/components/navigation/navigation.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent, FooterComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'movie-app';
  bemm = useBemm('app');
  movies$: Observable<Movie[]>;

  

  constructor(private store: Store) {
    this.movies$ = this.store.select(selectAllMovies);
  }

  ngOnInit() {
    this.store.dispatch(loadMovies());
  }

}
