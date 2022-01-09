import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  searchText = '';
  ideas: string[] = [
    'Encanto',
    'Avengers',
    'Spiderman',
    'El señor de los anillos',
    'Batman',
    'Superman',
  ];

  constructor(private movieService: MoviesService) {}

  search(ev) {
    const valueInput = ev.detail.value;
    // console.log(valueInput);
    this.movieService
      .searchMovie(valueInput)
      .subscribe((resp) => console.log(resp));
  }
}
