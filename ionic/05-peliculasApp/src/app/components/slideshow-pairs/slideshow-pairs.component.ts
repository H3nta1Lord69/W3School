import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces';

@Component({
  selector: 'app-slideshow-pairs',
  templateUrl: './slideshow-pairs.component.html',
  styleUrls: ['./slideshow-pairs.component.scss'],
})
export class SlideshowPairsComponent implements OnInit {
  @Input() moviePoster: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 2.5,
    freeMode: true,
    spaceBetween: -30,
  };

  constructor() {}

  ngOnInit() {}
}
