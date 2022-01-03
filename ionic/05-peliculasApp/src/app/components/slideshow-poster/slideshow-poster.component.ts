import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces';

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

  constructor() {}

  ngOnInit() {}
}
