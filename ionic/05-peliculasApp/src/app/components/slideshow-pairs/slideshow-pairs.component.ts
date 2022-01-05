import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../interfaces';
import { ModalController } from '@ionic/angular';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-slideshow-pairs',
  templateUrl: './slideshow-pairs.component.html',
  styleUrls: ['./slideshow-pairs.component.scss'],
})
export class SlideshowPairsComponent implements OnInit {
  @Input() moviePoster: Pelicula[] = [];
  @Output() loadMore = new EventEmitter();

  slideOpts = {
    slidesPerView: 2.5,
    freeMode: true,
    spaceBetween: -30,
  };

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onClick() {
    this.loadMore.emit();
  }

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
