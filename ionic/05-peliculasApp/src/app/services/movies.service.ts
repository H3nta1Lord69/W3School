import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMDB } from '../interfaces';
import { environment } from '../../environments/environment';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  private executeQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${apiKey}&language=es`;

    return this.http.get<T>(query);
  }

  getPopular() {
    const query = `/discover/movie?sort_by=popularity.desc`;

    return this.executeQuery<RespuestaMDB>(query);
  }

  getFeature() {
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const month = today.getMonth() + 1;

    let stringMonth;

    if (month < 10) {
      stringMonth = '0' + month;
    } else {
      stringMonth = month;
    }

    const init = `${today.getFullYear()}-${stringMonth}-01`;
    const end = `${today.getFullYear()}-${stringMonth}-${lastDay}`;

    return this.executeQuery<RespuestaMDB>(
      `/discover/movie?primary_release_date.gte=2021-10-01&primary_release_date.lte=2021-12-31`
    );
  }
}
