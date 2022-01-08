import { Component, Input, OnInit } from '@angular/core';
import { Cast, MovieDetail } from 'src/app/interfaces';
import { MoviesService } from '../../services/movies.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  @Input() id;
  movie: MovieDetail = {};
  cast: Cast[] = [];

  hidden = 150;

  sliderOptCast = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5,
  };

  constructor(
    private movieService: MoviesService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.movieService.getMovieDetail(this.id).subscribe((resp) => {
      console.log(resp);
      this.movie = resp;
    });

    this.movieService.getCredits(this.id).subscribe((resp) => {
      console.log(resp);
      this.cast = resp.cast;
    });
  }

  getBack() {
    this.modalCtrl.dismiss();
  }

  putFavorite() {}
}
