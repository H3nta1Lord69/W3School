import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Pelicula } from '../../interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  recentMovies: Pelicula[] = [];
  populars: Pelicula[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.movieService.getFeature().subscribe((resp) => {
      this.recentMovies = resp.results;
    });

    this.getPopulars();
  }

  loadMore() {
    this.getPopulars();
  }

  getPopulars() {
    this.movieService.getPopular().subscribe((resp) => {
      const arrTemp = [...this.populars, ...resp.results];
      this.populars = arrTemp;
    });
  }
}
