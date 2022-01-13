import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MovieDetail } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  movies: MovieDetail[] = [];

  constructor(private storage: Storage) { }

  saveMovie(pelicula: MovieDetail) {

    this.movies.push(pelicula);
    this.storage.set('peliculas', this.movies);

  }
}
