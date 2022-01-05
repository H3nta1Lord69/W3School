import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../interfaces';

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

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.loadMore.emit();
  }
}
