import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces';
import { ModalController } from '@ionic/angular';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  @Input() moviePoster: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 2.5,
    freeMode: true,
  };

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async showDetail(id: string) {
    const modal = await this.modalCtrl.create({
      component: MovieDetailsComponent,
      componentProps: {
        id,
      },
    });

    modal.present();
  }
}
