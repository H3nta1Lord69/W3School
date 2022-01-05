import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  @Input() id;

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.movieService.getMovieDetail(this.id).subscribe((resp) => {
      console.log(resp);
    });

    this.movieService.getCredits(this.id).subscribe((resp) => {
      console.log(resp);
    });
  }
}
