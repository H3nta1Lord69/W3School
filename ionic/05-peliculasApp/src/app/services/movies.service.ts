import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient ) { }

  getFeature() {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2021-09-15&primary_release_date.lte=2021-10-22&api_key=bff5f0b9426eedd4103be48faf24d408&language=es`)
  }
}
