import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MovieDetailsComponent } from 'src/app/components/movie-details/movie-details.component';
import { Pelicula } from 'src/app/interfaces';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  searchText = '';
  searching = false;
  movies: Pelicula[] = [];
  ideas: string[] = [
    'Encanto',
    'Avengers',
    'Spiderman',
    'El señor de los anillos',
    'Batman',
    'Superman',
  ];

  constructor(
    private movieService: MoviesService,
    private modalCtrl: ModalController
  ) {}

  search(ev) {
    const valueInput: string = ev.detail.value;
    if (valueInput.length === 0) {
      this.searching = false;
      this.movies = [];
      return;
    }
    // console.log(valueInput);
    this.searching = true;
    this.movieService.searchMovie(valueInput).subscribe((resp) => {
      console.log(resp);
      this.movies = resp['results'];
      this.searching = false;
    });
  }

  async showModal(id: number) {
    const modal = await this.modalCtrl.create({
      component: MovieDetailsComponent,
      componentProps: {
        id,
      },
    });

    modal.present();
  }
}
